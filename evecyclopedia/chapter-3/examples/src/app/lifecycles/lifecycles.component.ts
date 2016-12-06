import {Component, OnInit , OnDestroy } from '@angular/core';

@Component({
    selector:'lifecycle-component',
    templateUrl: './lifecycles.component.html'
})
export class LifecyclesComponent implements OnInit, OnDestroy{
    constructor(){
        console.log('Component constructor called');
    }
    ngOnInit(){
        console.log('Component initiated!');
    }
    ngOnDestroy(){
        console.log('Component destroyed!');
    }
}