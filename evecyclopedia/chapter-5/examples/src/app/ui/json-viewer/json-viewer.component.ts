import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
@Component({
    selector: 'json-viewer',
    templateUrl: 'json-viewer.component.html',
    styleUrls: ['json-viewer.component.less']
})
export class JsonViewerComponent{
    jsonData:any;
    observableData$:Observable<any>;
    
    constructor(private apiService:ApiService){}

    fetchData(url){
        this.apiService.getJson(url)
                        .subscribe(newData => this.jsonData = newData);
    }

    fetchDataUsingObservable(url){
        this.observableData$ = this.apiService.getJson(url);
    }

    
}