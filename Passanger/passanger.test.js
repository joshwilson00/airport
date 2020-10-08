const Passanger = require('./passanger');

describe('Passanger', ()=>{
    const josh = new Passanger('Josh');
    test('should have a name property.', () => {
        expect(josh.name).toBe('Josh');
    })
    test('should have an array of bags', () => {
        expect(josh.bags.length).toBe(0);
    })
    test('should be able to call for assistance', () => {
        console.log(josh.callAttendant());
        expect(josh.callAttendant()).toBe('Hello! Can I have some assistance please!');
    })
    
    
})