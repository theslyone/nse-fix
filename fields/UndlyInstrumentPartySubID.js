var invert = require('invert-obj');

function UndlyInstrumentPartySubID (undlyInstrumentPartySubId) {
  this.message = undlyInstrumentPartySubId;
}

UndlyInstrumentPartySubID.prototype.value = function () {
  return this.message;
};

UndlyInstrumentPartySubID.Tag = '1063';

UndlyInstrumentPartySubID.Type = 'STRING';

module.exports = UndlyInstrumentPartySubID;