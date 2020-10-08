const Person = require('./Person/person');
const Bag = require('./Bag/bag');
const Airport = require('./Airport/airport');
const Plane = require('./Plane/plane');
const Passanger = require('./Passanger/passanger');
const Crew = require('./Crew/crew');

const egnm = new Airport('EGNM');
const egll = new Airport('EGLL');
const lepa = new Airport('LEPA');
const plane1 = new Plane(egnm, 200, egll);
const plane2 = new Plane(lepa, 20, egnm);
const josh = new Passanger('Josh');
const sam = new Crew('Sam');
const bag1 = new Bag(20);
const bag2 = new Bag(1200);
const bag3 = new Bag(55);

josh.addBag(bag1);
sam.addBag(bag2);
sam.addBag(bag3)
plane2.board(sam);
plane2.board(josh);

egll.takeOff(plane1);
egnm.land(plane1);
egnm.takeOff(plane2);
lepa.land(plane2);
console.log(Crew.crossCheck());
josh.callAttendant();
console.log(josh.plane);