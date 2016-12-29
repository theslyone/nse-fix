var invert = require('invert-obj');

function LocationID (locationId) {
  this.message = locationId;
}

LocationID.prototype.value = function () {
  return this.message;
};

LocationID.Tag = '283';

LocationID.Type = 'STRING';

module.exports = LocationID;