const Crew = require('../Crew/crew');

class Plane {
    constructor(destination, maxPAX, currentLocation, name=(Math.floor((Math.random() * 999) + 1))){
        this.name = name;
        this.destination = destination.name;
        this.maxPAX = maxPAX;
        this.currentLocation = currentLocation.name;
        this.currentPAX = 0;
        this.passangers = [];
        this.crew = []
        currentLocation.addPlane(this);
    }

    board(person){
        if (this.currentPAX == this.maxPAX) {
            throw new Error('Plane is full!');
        }
        if (person instanceof Crew){
            this.crew.push(person)
        } else{
            this.passangers.push(person);
        }
        this.currentPAX++;
    }
    changeDest(dest){
        this.destination = dest;
    }
}


module.exports = Plane;