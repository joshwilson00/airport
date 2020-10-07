const { expect } = require('@jest/globals');
const Bag = require('./bag.js');

describe('If weight is provided, object should be created.', ()=>{
    test('should return truthy', () => {
        const bag = new Bag(20);
        expect(bag.weight).isTruthy;
    });
});
describe('Only numbers should be accepted as weight', ()=>{
    test('should throw an error', () => {
        expect(()=> new Bag('fgdfgdfg')).toThrowError('Invalid value for weight!');
    })
    
});