import {Component, Input} from '@angular/core';

@Component({
    selector: 'info-capsule',
    styleUrls: ['info-capsule.component.less'],
    templateUrl: 'info-capsule.component.html'
})
export class InfoCapsuleComponent{
    @Input()
    private title:string;
    
    @Input()
    private value:string;
    

}
