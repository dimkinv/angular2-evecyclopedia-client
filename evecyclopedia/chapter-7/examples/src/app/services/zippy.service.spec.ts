
import {ZippyService} from './zippy.service';

//Isolated Unit tests
describe('Zippy Service isolated unit tests', ()=>{
    let zippyService:ZippyService = new ZippyService();
    it('should return text when calling getText method', ()=> {
        let text = zippyService.getText();
        expect(text.length).toBeGreaterThan(0);
    });
});

//Using angular tools to provide the service
import { TestBed, inject, async } from '@angular/core/testing';

describe('Zippy Service isolated unit tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ZippyService] });
    });
    it('test should wait for FancyService.getTimeoutValue',
        async(inject([ZippyService], (zippyService: ZippyService) => {
            let text = zippyService.getText();
            expect(text.length).toBeGreaterThan(0);
        })));
});