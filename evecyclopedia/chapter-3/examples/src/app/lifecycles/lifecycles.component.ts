import {Component, OnInit , OnDestroy } from '@angular/core';

@Component({
    selector:'lifecycle-component',
    templateUrl: './lifecycles.component.html'
})
export class LifecyclesComponent implements OnInit, OnDestroy{
    constructor(){
        console.log('%c constructor :: Component constructor called! ', 'background: #222; color: #bada55; font-size: 20px');
    }
    ngOnInit(){
        console.log('%c ngOnInit    :: Component initiated!', 'background: #222; color: #da9955; font-size: 20px');
    }
    ngOnDestroy(){
        console.log('%c ngOnDestroy :: Component destroyed!', 'background: #222; color: #da5555; font-size: 20px');
    }
}