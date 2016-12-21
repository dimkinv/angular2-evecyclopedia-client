import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService{
    constructor(private http:Http){}

    getJson(url:string):Observable<any>{
        return this.http.get(url)
                    .map(res => res.json())
    }

    getString(url: string): Observable<string> {
      return this.http.get(url)
        .map(res => res.text());
    }

    searchGroup(query:string):Observable<any>{
        return this.http.get('https://evecyclopedia.herokuapp.com/api/groups/'+query)
                    .map(res => {
                        if(res.status>=200 && res.status<300){
                            return res.json();
                        }else{
                            return Observable.of('Error')
                        }
                    })
                    .catch(err => {
                      return Observable.of('Error');
                    })
    }


}