class Person{
    constructor(name){
        if (!name) {throw new Error('Enter a name!');}
        this.name = name;
        this.bags = [];
        this.plane;
    }
    addBag(bag){
        this.bags.push(bag);
    }

    addFlight(plane){
        this.plane = plane;
    }
}


module.exports = Person;