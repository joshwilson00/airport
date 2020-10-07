const Person = require('./Person/person');
const Bag = require('./Bag/bag');
const Airport = require('./Airport/airport');
const Plane = require('./Plane/plane');



const egnm = new Airport('EGNM');
const egll = new Airport('EGLL');
const lepa = new Airport('LEPA');
const plane1 = new Plane(egnm, 200, egll);
const plane2 = new Plane(lepa, 20, egnm);
const josh = new Person('Josh');
const sam = new Person('Sam');
const bag1 = new Bag(20);
const bag2 = new Bag(1200);
const bag3 = new Bag(55);

josh.addBag(bag1);
sam.addBag(bag2);
sam.addBag(bag3)
plane2.board(sam);
plane1.board(josh);



egnm.land(plane1);
egnm.takeOff(plane2);
