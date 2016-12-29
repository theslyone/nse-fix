var invert = require('invert-obj');

function UndlyInstrumentPartyID (undlyInstrumentPartyId) {
  this.message = undlyInstrumentPartyId;
}

UndlyInstrumentPartyID.prototype.value = function () {
  return this.message;
};

UndlyInstrumentPartyID.Tag = '1059';

UndlyInstrumentPartyID.Type = 'STRING';

module.exports = UndlyInstrumentPartyID;