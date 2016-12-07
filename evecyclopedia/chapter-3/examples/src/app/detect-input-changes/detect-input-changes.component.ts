import {Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector:'detect-input-changes',
    templateUrl: './detect-input-changes.component.html'
})
export class DetectInputChangesComponent implements OnChanges{
    private _firstName;
    @Input() set firstName(newVal:string){
        console.log('firstName change detected by it\'s setter!', newVal);
        this._firstName = newVal;
    };
    get firstName():string{return this._firstName;}

    @Input() lastName:string;
    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        console.log('Input change detected by lifecycle hook ngOnChanges!', changes);
    }
}