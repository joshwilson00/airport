const Person = require('./person');
const Bag = require('../Bag/bag');
describe('Person', ()=>{
    test('should have a name.', () => {
        const josh = new Person('Josh');
        expect(josh.name).toBe('Josh');
    });
    test('should have ability to have bags.', () => {
        const josh = new Person('Josh');
        const bag = new Bag(20);
        //No bags in array
        expect(josh.bags.length).toBe(0);
        //Add a bag
        josh.addBag(bag);
        //Bag should be in array now.
        expect(josh.bags.length).toBe(1);
    })
    test('should throw an error', () => {
        expect(()=>{new Person()}).toThrowError('Enter a name!');
    })
    
})