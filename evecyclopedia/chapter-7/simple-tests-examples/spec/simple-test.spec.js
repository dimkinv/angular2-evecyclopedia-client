describe('calculator tests', () => {
    let calculator;
    beforeAll(()=>{
        calculator = new Calculator();
    });

    it('should add 2 + 2 = 4', ()=>{
        let res = calculator.add(2,2);
        expect(res).toBe(4);
    });
});