const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Dingo Park', 10,);

    dinosaur1 = new Dinosaur('Triceraptor', 'carnivore', 10);
    dinosaur2 = new Dinosaur('Brachiosaurus', 'plasterina', 20);
    dinosaur3 = new Dinosaur('Mosasaurus', 'herbivorous', 30);
    dinosaur4 = new Dinosaur('Apatosaurus', 'herbivorous', 40);
    dinosaur5 = new Dinosaur('T-rex', 'carnivore', 50);

    park.dinosaurCollection = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dingo Park')
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur5);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function (){
      park.removeDinosaur(dinosaur1);
      const actual = park.dinosaurCollection.length;
      assert.strictEqual(actual, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
