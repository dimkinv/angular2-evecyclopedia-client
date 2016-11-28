import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService{
    headers:Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    api_url = 'https://evecyclopedia.herokuapp.com/api';

    constructor(private http: Http){}

    get(path:string):Observable<any>{
        return this.http.get(this.api_url+path, {headers: this.headers})
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    post(path:string, body: any):Observable<any>{
        return this.http.post(this.api_url+path,
            JSON.stringify(body),
            {headers: this.headers})
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    remove(path:string):Observable<any>{
        return this.http.delete(this.api_url+path, {headers: this.headers})
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    setHeaders(headers){
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }

    private getJson(res:Response){
        return res.json();
    }
    private checkForErrors(res: Response):Response{
        if(res.status>=200 && res.status<300){
            return res;
        }else{
            let err = new Error(res.statusText);
            err['response'] = res;
            console.error(err);
            throw err;
        }
    }
}