class Airport {
    static airports = [];
    constructor(name){
        this.name = name;
        this.currentPlanes = [];
        this.constructor.airports.push(this);
    }

    land(plane){
        console.log(`Plane landing from: ${plane.currentLocation}`);
        //Update the planes current location.
        plane.currentLocation = this.name;
        //Add the plane to the array of planes at this airport.
        this.addPlane(plane);
        const rand = (Math.floor(Math.random() * this.constructor.airports.length));
        plane.destination = this.constructor.airports[rand].name;
    }
    takeOff(plane){
        console.log(`Plane departing to: ${plane.destination}`);
        const loc = this.currentPlanes.indexOf(plane);
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane), 1);
        // console.log(this.constructor.airports.indexOf(plane.currentLocation));
    }
    addPlane(plane){
        this.currentPlanes.push(plane);
    }
    
    showPlanes(){
        this.currentPlanes.forEach(plane => {
            console.log(`----- Current Location: ${plane.currentLocation} -----`);
            console.log(`Destination: ${plane.destination}`);
            console.log(`Capacity: ${plane.maxPAX}`);
            console.log(`No of passangers: ${plane.currentPAX}`);
            plane.passangers.forEach((passanger, index) =>{
                console.log(`> Passanger #${index +1}`);
                console.log(`> Name: ${passanger.name}`);
                passanger.bags.forEach((bag, index) =>{
                    console.log(`> > Bag #${index +1}`);
                    console.log(`> > Weight: ${bag.weight}`);
                })
            })
        })
    }
}

module.exports = Airport;