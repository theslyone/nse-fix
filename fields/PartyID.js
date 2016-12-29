var invert = require('invert-obj');

function PartyID (partyId) {
  this.message = partyId;
}

PartyID.prototype.value = function () {
  return this.message;
};

PartyID.Tag = '448';

PartyID.Type = 'STRING';

module.exports = PartyID;