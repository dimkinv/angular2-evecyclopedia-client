import { ZippyComponent } from './zippy.component';
import { ZippyService } from '../services/zippy.service';


//Zippy pipe mock
import { Pipe } from '@angular/core';
@Pipe({name: 'zippy'})
class ZippyPipe{
    transform(text){
        return text
    }
}

//Zippy service mock
let zippyServiceMock = {
    getText: () => 'mock text'
}

//======================================================================================================
//  Isolated testing - testing only the class
//======================================================================================================
describe('Zippy Component Isolated tests', ()=> {
    let componentClass:ZippyComponent;

    beforeEach(()=>{
         componentClass = new ZippyComponent(zippyServiceMock);
    });

    it('Should initiate doNotShow with true', ()=> {
        expect(componentClass.doNotShow).toBeTruthy();
    });

    it('Should toggle doNotShow to false when running toggleDisplay at the first time', ()=> {
        componentClass.toggleDisplay();
        expect(componentClass.doNotShow).toBeFalsy();
    });
});


//======================================================================================================
//  Shallow Testing - rendering only the component without it's children
//======================================================================================================
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

describe('Zippy component shallow tests', ()=>{
    let fixture:ComponentFixture<ZippyComponent>, 
        component: ZippyComponent;

    //TestBed.compileComponents returns a promise, so use async to wait for resolving
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZippyComponent, ZippyPipe],
            providers: [
                { provide: ZippyService, useValue: zippyServiceMock }
            ],
            // Tells the compiler not to error on unknown elements and attributes
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents().then(()=>{
            fixture = TestBed.createComponent(ZippyComponent);
            component    = fixture.componentInstance;
        });
    }));

    it('Should initiate doNotShow with true', ()=> {
        const p = fixture.debugElement.query(By.css('p')).nativeElement;
        fixture.detectChanges();

        expect(p.hidden).toBeTruthy();
    });

    it('Should ignore child components when using NO_ERRORS_SCHEMA', ()=> {
        const childComponentSpan = fixture.debugElement.query(By.css('.sub-zippy'));
        fixture.detectChanges();

        expect(childComponentSpan).toBeNull();
    });

    it('Should toggle doNotShow to false when running toggleDisplay at the first time', ()=> {
        const btn  = fixture.debugElement.query(By.css('button'));
        const p = fixture.debugElement.query(By.css('p')).nativeElement;
        
        btn.triggerEventHandler('click', null);
        fixture.detectChanges();
        
        expect(component.doNotShow).toBeFalsy();
    });

});


//======================================================================================================
//  Integration testing
//======================================================================================================
import {SubZippyComponent} from './sub-zippy/sub-zippy.component';

describe('Zippy component integration tests', ()=>{
    let fixture:ComponentFixture<ZippyComponent>, 
        component: ZippyComponent;

    //TestBed.compileComponents returns a promise, so use async to wait for resolving
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZippyComponent, ZippyPipe, SubZippyComponent],
            providers: [
                { provide: ZippyService, useValue: zippyServiceMock }
            ]
        });

        TestBed.compileComponents().then(()=>{
            fixture = TestBed.createComponent(ZippyComponent);
            component    = fixture.componentInstance;
        });
    }));

   
    it('Should render child components when not using NO_ERRORS_SCHEMA', ()=> {
        const childComponentSpan = fixture.debugElement.query(By.css('.sub-zippy')).nativeElement;
        fixture.detectChanges();
        expect(childComponentSpan.innerHTML).toBe(`I'm a Sub-Zippy Component!`);
    });
});