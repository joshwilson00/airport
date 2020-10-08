const Plane = require('./plane');
const Airport = require('../Airport/airport');
const Person = require('../Person/person');
const { expect } = require('@jest/globals');
const josh =  new Person('Josh');
describe('Plane', ()=>{
    const egnm = new Airport('EGNM');
    const egll = new Airport('EGLL');
    test('should have a maximum number of passangers and destination airport', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 200, egll);
        expect(plane.maxPAX).toBe(200);
        expect(plane.destination).toBe('EGNM');
    });
    test('should be able to change destination airport.', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 200, egll);
        plane.changeDest(egll.name);
        expect(plane.destination).toBe('EGLL');
    });
    test('should increase currentPAX when user is boarded.', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 200, egll);
        expect(plane.currentPAX).toBe(0);
        plane.board(josh); 
        expect(plane.currentPAX).toBe(1);
    })
    test('should know each passanger that is on the airplane', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 200, egll);
        plane.board(josh);
        expect(plane.passangers[0].name).toBe('Josh');
    })
    test('should have a current airport', () => {
        const egnm = new Airport('EGNM');
        const egll = new Airport('EGLL');
        const plane = new Plane(egnm, 200, egll);
        expect(plane.currentLocation).toBe('EGLL');
    })
    test('should not allow you to board on a full flight', () => {
        const plane = new Plane(egnm, 0, egll);
        expect(()=>{plane.board(josh)}).toThrowError();
    })
    
})