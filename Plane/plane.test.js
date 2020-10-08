const Plane = require('./plane');
const Airport = require('../Airport/airport');
const Person = require('../Person/person');
const Crew = require('../Crew/crew');
const { expect } = require('@jest/globals');
const josh =  new Person('Josh');
describe('Plane', ()=>{
    const egnm = new Airport('EGNM');
    const egll = new Airport('EGLL');
    const plane = new Plane(egnm, 200, egll);
    test('should have a maximum number of passangers and destination airport', () => {
        expect(plane.maxPAX).toBe(200);
        expect(plane.destination).toBe('EGNM');
    });
    test('should be able to change destination airport.', () => {
        plane.changeDest(egll.name);
        expect(plane.destination).toBe('EGLL');
    });
    test('should increase currentPAX when user is boarded.', () => {
        expect(plane.currentPAX).toBe(0);
        plane.board(josh); 
        expect(plane.currentPAX).toBe(1);
    })
    test('should know each passanger that is on the airplane', () => {
        plane.board(josh);
        expect(plane.passangers[0].name).toBe('Josh');
    })
    test('should have a current airport', () => {
        expect(plane.currentLocation).toBe('EGLL');
    })
    test('should not allow you to board on a full flight', () => {
        const plane = new Plane(egnm, 0, egll);
        expect(()=>{plane.board(josh)}).toThrowError();
    })
    test('should be able to add a crew member to the plane.', () => {
        const bob = new Crew('Bob');
        plane.board(bob);
        expect(plane.crew.length).toBe(1);
    })
    
    
})