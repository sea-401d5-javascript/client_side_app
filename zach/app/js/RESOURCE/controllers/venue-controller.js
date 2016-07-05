'use strict';

module.exports = function(app) {
  app.controller('VenueController', ['$http', 'ErrorService', VenueController]);
};

function VenueController($http, ErrorService) {
  this.$http = $http;
  this.venues = [{name: 'testVenue', neighborhood: 'Capitol Hill', servesAlcohol: true}];
  this.errors = ErrorService.getErrors();
  this.deleteVenue = function(venue) {
    this.$http.delete('http://localhost:3000/venues/' + venue._id)
      .then(() => {
        let index = this.venues.indexOf(venue);
        this.venues.splice(index, 1);
      }, ErrorService.logError('error deleting venue from database'));
  }.bind(this);
  this.updateVenue = function(venue, updatedVenue) {
    venue.name = updatedVenue.name;
    venue.neighborhood = updatedVenue.neighborhood;
    venue.servesAlcohol = updatedVenue.servesAlcohol;
    this.$http.put('http://localhost:3000/venues/', venue)
      .then(() => {
        this.venues = this.venues.map(v => {
          return v._id === venue._id ? venue : v;
        });
      }, ErrorService.logError('error updating venue in database'));
  }.bind(this);
  this.addVenue = function() {
    this.$http.post('http://localhost:3000/venues/', this.newVenue)
      .then(()=> {
        this.venues.push(this.newVenue);
        this.newVenue = null;
      }, ErrorService.logError('error adding venue to database'));
  }.bind(this);
}

VenueController.prototype.getVenues = function() {
  this.$http.get('http://localhost:3000/venues')
    .then((res) => {
      this.venues = res.data;
    }, (err) => {
      console.log(err);
    });
};
