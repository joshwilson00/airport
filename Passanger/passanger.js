const Person = require('../Person/person');

class Passanger extends Person {
    callAttendant(){
        return ('Hello! Can I have some assistance please!');
    }
}

module.exports = Passanger;