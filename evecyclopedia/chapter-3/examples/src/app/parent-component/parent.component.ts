import {Component } from '@angular/core';

@Component({
    selector:'parent-component',
    templateUrl: './parent.component.html'
})
export class ParentComponent{
    parentNumber:number = 0;
    
    onCounterChnage(newVal){
        console.log('child changed value to: ', newVal);
        this.parentNumber = newVal;
    }
}