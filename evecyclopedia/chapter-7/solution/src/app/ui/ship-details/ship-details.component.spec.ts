import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import {ShipDetailsComponent} from './ship-details.component';

let shipData = {
    "group":"Test group 1",
    "race":"Test race 1",
    "name":"Test Ship 1",
    "description":"some desc...",
    "volume":1,
    "capacity":2,
    "mass":3,
    "attributes":[{"description":"","icon_path":"56_64_5.png","value":75},
                    {"description":"","icon_path":"56_64_5.png","value":75}]
};

//output spy
let editShipSpy = jasmine.createSpy('editShipSpy');

describe('Zippy component shallow tests', ()=>{
    let fixture:ComponentFixture<ShipDetailsComponent>, 
        component: ShipDetailsComponent;

    //TestBed.compileComponents returns a promise, so use async to wait for resolving
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShipDetailsComponent],
            // Tells the compiler not to error on unknown elements and attributes
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShipDetailsComponent);
        component = fixture.componentInstance;
        //@Input
        component.ship = shipData;
        //@Output
        component.edit.subscribe(editShipSpy); //subscribe spy function to event handler

        fixture.detectChanges(); // trigger initial data binding
    });

    it('Should display ship name', ()=> {
        const shipNameElm  = fixture.debugElement.query(By.css('.title>h2')).nativeElement;
        expect(shipNameElm.innerHTML).toBe('Test Ship 1');
    });

    it('Should emit change event when clicking edit ship', ()=> {
        const editBtn  = fixture.debugElement.query(By.css('button'));
        editBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        
        expect(editShipSpy).toHaveBeenCalled();
    });


    it('Should include the same amout of unrendered info-capsule components as shipData attributes ', ()=> {
        const infoCapsules  = fixture.debugElement.queryAll(By.css('info-capsule'));
        expect(infoCapsules.length).toEqual(shipData.attributes.length);
    });
    
});