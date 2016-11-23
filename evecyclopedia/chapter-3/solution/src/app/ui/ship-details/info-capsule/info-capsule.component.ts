import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'info-capsule',
    styleUrls: ['info-capsule.component.less'],
    templateUrl: 'info-capsule.component.html'
})
export class InfoCapsuleComponent implements OnInit{
    @Input()
    private icon?:string;

    @Input()
    private title:string;
    
    @Input()
    private value:string;

    ngOnInit(){
        this.icon = this.icon || './assets/no-icon.jpg';
    }

}
