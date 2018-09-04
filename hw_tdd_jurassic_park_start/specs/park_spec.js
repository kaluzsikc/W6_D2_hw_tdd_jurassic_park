const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Dingo Park', 10, ['Triceraptor', 'Brachiosaurus', 't-rex', 'Mosasaurus']);
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
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, ['Triceraptor', 'Brachiosaurus', 't-rex', 'Mosasaurus'])
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaurToCollection('Dingozaurus');
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
