import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    private value: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    gotoNews() {
        this.router.navigate(['/news']);
    }

    gotoNewsWithParam() {
        this.router.navigate(['/news', this.value]);
    }
}
