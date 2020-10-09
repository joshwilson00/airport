const fs = require('fs').promises;
const path = require('path');


class Airport {
    static airports = [];
    constructor(name){
        this.name = name;
        this.currentPlanes = [];
        this.constructor.airports.push(this);
    }

    land(plane){
        if (plane.destination != this.name) {
            throw new Error(`This planes destination is not: ${this.name}!`);
        }
        console.log(`Plane ${plane.name} landing at: ${plane.destination} from: ${plane.currentLocation}`);
        //Update the planes current location.
        plane.currentLocation = this.name;
        //Add the plane to the array of planes at this airport.
        this.addPlane(plane);
        const rand = (Math.floor(Math.random() * this.constructor.airports.length));
        plane.destination = this.constructor.airports[rand].name;

    }
    takeOff(plane){
        if (plane.currentLocation != this.name) {
            throw new Error(`This plane is currently at: ${plane.currentLocation}!`);
        }
        console.log(`Plane ${plane.name} departing from ${plane.currentLocation} to: ${plane.destination}`);
        const loc = this.currentPlanes.indexOf(plane);
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane), 1);
    }
    addPlane(plane){
        this.currentPlanes.push(plane);
    }
    /*CALLBACK*/
    // getInfo(callback){
    //     //read drive.
    //     fs.readFile(path.join(__dirname, 'airports.json'), (err, data)=>{
    //         if (err) throw new Error(err);
    //         //turn the data into JSON object.
    //         const res = JSON.parse(String(data));
    //         //Find the correct airport.
    //         const airport = res.find(({icao}) => icao === this.name);
    //         //Now we have all the data, pass it onto the callback function.
    //         callback(err, airport);
    //     })
    // }

    /*PROMISE*/
    // getInfo(){
    //     return new Promise((resolve, reject) =>{
    //         fs.readFile(path.join(__dirname, 'airports.json'), (err, data)=>{
    //             if (err) reject(err);
    //             const res = JSON.parse(String(data));
    //             const airport = res.find(({icao})=>icao === this.name);
    //             resolve(airport);
    //         })
    //     })
    // }

    // async getInfo(){
    //     return new Promise((resolve, reject)=>{
    //         fs.readFile(path.join(__dirname, 'airports.json'), (err, data)=>{
    //             if (err) reject(err);
    //             const res = JSON.parse(String(data));
    //             const airport = res.find(({icao}) => icao == this.name);
    //             resolve(airport);
    //         })
    //     })
    // }

    async getInfo(){
        const data = await fs.readFile(path.join(__dirname, 'airports.json'));
        const info = JSON.parse(String(data));
        const airport = info.find(({icao}) => icao == this.name);
        return airport;
    }
}


module.exports = Airport;