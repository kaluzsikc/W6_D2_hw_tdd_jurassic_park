const Park = function( name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
};


Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indexOfDinosaur, 1)
};
//
// Park.prototype.popularDinosaur = function () {
//   let popularDino = [];
// for (let i = 0; i<this.dinosaurCollection.length; i++) {
//
//   }
//   return
// };


Park.prototype.findBySpecies = function(species) {

  let sameSpecies = [];

  for (dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      sameSpecies.push(dinosaur);
    }
  }
  return sameSpecies;
};


// Park.prototype.removeBySpecies = function (species) {
//
//   let sameSpecies = this.findBySpecies(species);
//
//   while (sameSpecies.length > 0) {
//
//   for (dinosaur of sameSpecies) {
//    this.dinosaurCollection.splice(dinosaur, 1);}
//  };
// };

Park.prototype.removeBySpecies = function(species) {

  let sameSpecies = this.findBySpecies(species);

  for (dinosaur of sameSpecies) {
    this.removeDinosaur(dinosaur);
 };
};

module.exports = Park;
