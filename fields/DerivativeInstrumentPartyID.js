var invert = require('invert-obj');

function DerivativeInstrumentPartyID (derivativeInstrumentPartyId) {
  this.message = derivativeInstrumentPartyId;
}

DerivativeInstrumentPartyID.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartyID.Tag = '1293';

DerivativeInstrumentPartyID.Type = 'STRING';

module.exports = DerivativeInstrumentPartyID;