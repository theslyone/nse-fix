var invert = require('invert-obj');

function InstrumentPartyID (instrumentPartyId) {
  this.message = instrumentPartyId;
}

InstrumentPartyID.prototype.value = function () {
  return this.message;
};

InstrumentPartyID.Tag = '1019';

InstrumentPartyID.Type = 'STRING';

module.exports = InstrumentPartyID;