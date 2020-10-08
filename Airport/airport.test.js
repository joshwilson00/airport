const Airport = require('./airport');
const Plane = require('../Plane/plane');
const Passanger = require('../Passanger/passanger');
const Bag = require('../Bag/bag');
const josh = new Passanger('Josh');
const egnm = new Airport('EGNM');
const egll = new Airport('EGLL');
const lepa = new Airport('LEPA');
const plane1 = new Plane(egnm, 200, egll);
const plane2 = new Plane(lepa, 20, egnm);
describe('Airport', ()=>{

    test('should have a name.', () => {
        const airport = new Airport('EGNM');
        expect(airport.name).toBe('EGNM');
    })
    test('should update planes current location upon landing.', () => {
        const plane = new Plane(egnm, 20, egll);
        egnm.land(plane);
        expect(plane.currentLocation).toBe('EGNM');
    })
    test('should be able to see the weight of the bagage of a passanger.', () => {
        const bag = new Bag(25);
        const plane = new Plane(egnm, 20, egll); 
        josh.addBag(bag);
        plane.board(josh);
        expect(egll.currentPlanes[2].passangers[0].bags[0].weight).toBe(25);
    })
})

describe('Take off and landing', ()=>{

    test('should remove the plane from the airport when it takes off.', () => {
        egnm.takeOff(plane2);
        lepa.land(plane2);
        //egnm.currentPlanes started at length of 2.
        expect(egnm.currentPlanes.length).toBe(1);
        expect(lepa.currentPlanes.length).toBe(1);    
    })
    test('should not be able to depart a plane from an airport that is not the origin.', () => {
        console.log(plane1);
        expect(()=>lepa.takeOff(plane1)).toThrowError('This plane is currently at: EGLL!');
    })   
    test('should not be able to land a plane with a different destination', () => {
        expect(()=>lepa.land(plane1)).toThrowError('This planes destination is not: LEPA!');
    })

})