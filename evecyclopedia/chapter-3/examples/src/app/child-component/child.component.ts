import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'child-component',
    templateUrl: './child.component.html'
})
export class ChildComponent{
    @Input() counter:number;

    @Output()counterChange:EventEmitter<number> = new EventEmitter();

    add(){
        this.counterChange.emit(this.counter + 1);
    }
    sub(){
        this.counterChange.emit(this.counter - 1);
    }
}