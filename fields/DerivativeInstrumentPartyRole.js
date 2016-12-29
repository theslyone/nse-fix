var invert = require('invert-obj');

function DerivativeInstrumentPartyRole (derivativeInstrumentPartyRole) {
  this.message = derivativeInstrumentPartyRole;
}

DerivativeInstrumentPartyRole.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartyRole.Tag = '1295';

DerivativeInstrumentPartyRole.Type = 'INT';

module.exports = DerivativeInstrumentPartyRole;