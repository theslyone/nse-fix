var invert = require('invert-obj');

function DerivativeInstrumentPartyIDSource (derivativeInstrumentPartyIdsource) {
  this.message = derivativeInstrumentPartyIdsource;
}

DerivativeInstrumentPartyIDSource.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartyIDSource.Tag = '1294';

DerivativeInstrumentPartyIDSource.Type = 'STRING';

module.exports = DerivativeInstrumentPartyIDSource;