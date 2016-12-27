import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
    private newsId: string;
    private group: { name: string };

    constructor(private route: ActivatedRoute, private http: Http) {
    }

    ngOnInit() {
        this.newsId = this.route.snapshot.params['groupId'];
        let requestOptions = new RequestOptions(new Headers({
            'content-type': 'application/json'
        }));

        this.route.params
            .switchMap(params => this.http.get('https://evecyclopedia.herokuapp.com/api/groups/'
                + params['groupId'], requestOptions))
            .subscribe(response => this.group = response.json());
    }
}
