var invert = require('invert-obj');

function DerivativeInstrumentPartySubID (derivativeInstrumentPartySubId) {
  this.message = derivativeInstrumentPartySubId;
}

DerivativeInstrumentPartySubID.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartySubID.Tag = '1297';

DerivativeInstrumentPartySubID.Type = 'STRING';

module.exports = DerivativeInstrumentPartySubID;