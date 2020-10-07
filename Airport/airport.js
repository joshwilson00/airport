class Airport {
    constructor(name){
        this.name = name;
        this.currentPlanes = [];
    }

    land(plane){
        //Update the planes current location.
        plane.currentLocation = this.name;
        //Add the plane to the array of planes at this airport.
        this.addPlane(plane);

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