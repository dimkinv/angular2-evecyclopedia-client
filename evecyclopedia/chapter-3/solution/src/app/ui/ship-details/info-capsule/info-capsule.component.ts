import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'info-capsule',
    styleUrls: ['info-capsule.component.less'],
    templateUrl: 'info-capsule.component.html'
})
export class InfoCapsuleComponent implements OnInit{
    @Input()
    icon?:string;

    @Input()
    title:string;
    
    @Input()
    value:string;

    @Input()
    availableValues?:string[];

    @Input()
    disabled:boolean;

    @Input()
    units?:string;

    @Output()
    change:EventEmitter<any> = new EventEmitter();

    ngOnInit(){
        this.icon = this.icon || './assets/no-icon.jpg';
    }

    onValueChange(newValue){
        console.log('changed!', newValue);
        this.change.emit(newValue)
    }
}
