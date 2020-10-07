class Person{
    constructor(name){
        if (!name) {throw new Error('Enter a name!');}
        this.name = name;
        this.bags = [];
    }
    addBag(bag){
        this.bags.push(bag);
    }
}


module.exports = Person;