const Park = function( name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}


Park.prototype.addDinosaurToCollection = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur.name);
  this.dinosaurCollection.splice(indexOfDinosaur, 1)
}

module.exports = Park;
