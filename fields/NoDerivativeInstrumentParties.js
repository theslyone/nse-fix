var invert = require('invert-obj');

function NoDerivativeInstrumentParties (noDerivativeInstrumentParties) {
  this.message = noDerivativeInstrumentParties;
}

NoDerivativeInstrumentParties.prototype.value = function () {
  return this.message;
};

NoDerivativeInstrumentParties.Tag = '1292';

NoDerivativeInstrumentParties.Type = 'NUMINGROUP';

module.exports = NoDerivativeInstrumentParties;