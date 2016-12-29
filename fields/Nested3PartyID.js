var invert = require('invert-obj');

function Nested3PartyID (nested3PartyId) {
  this.message = nested3PartyId;
}

Nested3PartyID.prototype.value = function () {
  return this.message;
};

Nested3PartyID.Tag = '949';

Nested3PartyID.Type = 'STRING';

module.exports = Nested3PartyID;