class Plane {
    constructor(destination, maxPAX, currentLocation, name=(Math.floor((Math.random() * 999) + 1))){
        this.name = name;
        this.destination = destination.name;
        this.maxPAX = maxPAX;
        this.currentLocation = currentLocation.name;
        this.currentPAX = 0;
        this.passangers = [];
        currentLocation.addPlane(this);
    }

    board(person){
        if (this.currentPAX == this.maxPAX) {
            throw new Error('Plane is full!');
        }
        this.currentPAX++;
        this.passangers.push(person);
    }

    changeDest(dest){
        this.destination = dest;
    }
}


module.exports = Plane;