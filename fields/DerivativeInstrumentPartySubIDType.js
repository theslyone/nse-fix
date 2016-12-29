var invert = require('invert-obj');

function DerivativeInstrumentPartySubIDType (derivativeInstrumentPartySubIdtype) {
  this.message = derivativeInstrumentPartySubIdtype;
}

DerivativeInstrumentPartySubIDType.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartySubIDType.Tag = '1298';

DerivativeInstrumentPartySubIDType.Type = 'INT';

module.exports = DerivativeInstrumentPartySubIDType;