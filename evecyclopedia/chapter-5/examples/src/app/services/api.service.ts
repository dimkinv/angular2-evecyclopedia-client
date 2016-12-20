import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService{
    constructor(private http:Http){}

    getJson(url:string):Observable<any>{
        return this.http.get(url)
                    .map(res => res.json())
    }
}