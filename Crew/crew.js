const Person = require('../Person/person');

class Crew extends Person {
    static crew = [];
    static crossCheck(){
        let check = true
        Crew.crew.forEach(crew=>{
            (!(crew instanceof Crew)) ? check = false : check;
        })
        if (check) {
            return true;
        }
        return false;
    }
    constructor(name){
        super(name);
        // Person.call(this.name)
        this.constructor.crew.push(this);
    }

}

module.exports = Crew;