import {EllipsisPipe} from './ellipsis.pipe';

describe('Ellipsis Pipe', () =>{
    let ellipsisPipe:EllipsisPipe;
    
    beforeEach(()=>{
        ellipsisPipe = new EllipsisPipe();
    });

    it('should trim the text and return it with ... when the text length is greater than the limit"',  () => {
        // given
        let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum`;
        let limit = 50;

        // when
        let result = ellipsisPipe.transform(text,limit);

        // assert
        expect(result).toBe('Lorem ipsum dolor sit amet, consectetur...');
    });

    it("should return the exact string where limit is greater than text length", () => {
        // given
        let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore';

        //when
        let result = ellipsisPipe.transform(text, 10000);

        // assert
        expect(result).toEqual(text);
    });
})