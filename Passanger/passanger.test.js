const Passanger = require('./passanger');

describe('Passanger', ()=>{
    const josh = new Passanger('Josh');
    test('should have a name property.', () => {
        expect(josh.name).toBe('Josh');
    })
    test('should have an array of bags', () => {
        expect(josh.bags.length).toBe(0);
    })
    
    
})