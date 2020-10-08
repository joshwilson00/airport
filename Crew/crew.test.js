const Crew = require('./crew');
const Passanger = require('../Passanger/passanger');
describe('Crew', ()=>{
    const bob = new Crew('Bob');
    const josh = new Passanger('Josh');
    test('should show that all crew are crew.', () => {
        expect(Crew.crossCheck()).toBeTruthy();
    })
    test('should not pass if a passanger is down as being crew.', () => {
        //Add a passanger as part of the crew.
        Crew.crew.push(josh);
        expect(Crew.crossCheck()).toBeFalsy();
    })
    
})