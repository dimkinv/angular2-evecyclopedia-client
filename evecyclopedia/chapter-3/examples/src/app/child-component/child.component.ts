import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'child-component',
    templateUrl: './child.component.html'
})
export class ChildComponent{
    @Input()counter:string;

    @Output()counterChange:EventEmitter<string> = new EventEmitter();

    add(){
        this.counterChange.emit(this.counter + 1);
    }
}