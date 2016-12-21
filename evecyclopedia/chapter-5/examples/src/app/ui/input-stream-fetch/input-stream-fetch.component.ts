import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'input-stream-fetch',
    templateUrl: 'input-stream-fetch.component.html'
})
export class InputStreamFetchComponent{
    inputStram$:Subject<any> = new Subject();
    responseStream$:Observable<any>;

    constructor(private apiService:ApiService){
        this.responseStream$ = this.inputStram$
                    //.debounceTime(200)
                    .switchMap(query => this.apiService.search(query));
    }

    onKeyUp(newVal){
        this.inputStram$.next(newVal);
    }
}