var invert = require('invert-obj');

function Nested2PartyID (nested2PartyId) {
  this.message = nested2PartyId;
}

Nested2PartyID.prototype.value = function () {
  return this.message;
};

Nested2PartyID.Tag = '757';

Nested2PartyID.Type = 'STRING';

module.exports = Nested2PartyID;