const Person = require('../Person/person');

class Passanger extends Person {
    callAttendant(){
        console.log('Hello! Can I have some assistance please!');
    }
}

module.exports = Passanger;