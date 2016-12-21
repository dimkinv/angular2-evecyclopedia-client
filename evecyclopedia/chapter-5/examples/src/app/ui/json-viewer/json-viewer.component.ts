import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
@Component({
    selector: 'json-viewer',
    templateUrl: 'json-viewer.component.html'
})
export class JsonViewerComponent {
  jsonData: any;
  observableData$: Observable<any>;
  retryResponse: string;
  mySlowRequest:any;
  slowRes: string = '';

  constructor(private apiService: ApiService) {
  }

  fetchData(url) {
    this.apiService.getJson(url)
      .subscribe(newData => this.jsonData = newData);
  }

  fetchDataUsingObservable(url) {
    this.observableData$ = this.apiService.getJson(url);
  }

  fetchRetryData() {
    this.apiService.getString('https://evecyclopedia.herokuapp.com/api/error')
      .subscribe(data => this.retryResponse = data, error => this.retryResponse = error);
  }

  fetchSlowRequest(){
    this.slowRes = null;
    this.mySlowRequest = this.apiService.getJson('http://slowwly.robertomurray.co.uk/delay/10000/url/https://evecyclopedia.herokuapp.com/api/groups')
      .subscribe(data => {
        this.slowRes = 'ok';
      });
  }
  cancelSlowRequest(){
    this.slowRes = ''
    this.mySlowRequest.unsubscribe();
  }
}
