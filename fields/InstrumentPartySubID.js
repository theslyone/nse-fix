var invert = require('invert-obj');

function InstrumentPartySubID (instrumentPartySubId) {
  this.message = instrumentPartySubId;
}

InstrumentPartySubID.prototype.value = function () {
  return this.message;
};

InstrumentPartySubID.Tag = '1053';

InstrumentPartySubID.Type = 'STRING';

module.exports = InstrumentPartySubID;