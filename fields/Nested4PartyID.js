var invert = require('invert-obj');

function Nested4PartyID (nested4PartyId) {
  this.message = nested4PartyId;
}

Nested4PartyID.prototype.value = function () {
  return this.message;
};

Nested4PartyID.Tag = '1415';

Nested4PartyID.Type = 'STRING';

module.exports = Nested4PartyID;