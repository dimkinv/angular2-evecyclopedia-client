import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService{
    headers:Headers = new Headers({});


    constructor(private http:Http){}

    getJson(url:string):Observable<any>{
        return this.http.get(url)
                    .map(res => res.json())
    }

    getString(url: string): Observable<string> {
      return this.http.get(url)
        .map(res => res.text());
    }

    search(query:string):Observable<any>{
        this.headers.set('X-NABIL', query);
        return this.http.get('https://evecyclopedia.herokuapp.com/api/groups', {headers: this.headers})
                    .map(res => res.json())
    }
}
