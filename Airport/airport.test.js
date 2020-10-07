const Airport = require('./airport');
const Plane = require('../Plane/plane');
const Person = require('../Person/person');
const Bag = require('../Bag/bag');
const josh = new Person('Josh');
describe('Airport', ()=>{
    test('should have a name.', () => {
        const airport = new Airport('EGNM');
        expect(airport.name).toBe('EGNM');
    })
    test('should update planes current location upon landing.', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 20, egll);
        egnm.land(plane);
        expect(plane.currentLocation).toBe('EGNM');
    })
    test('should be able to see the weight of the bagage of a passanger.', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const bag = new Bag(25);
        const plane = new Plane(egnm, 20, egll); 
        josh.addBag(bag);
        plane.board(josh);
        expect(egll.currentPlanes[0].passangers[0].bags[0].weight).toBe(25);
    })
    
})