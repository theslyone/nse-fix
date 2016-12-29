var invert = require('invert-obj');

function NoUndlyInstrumentParties (noUndlyInstrumentParties) {
  this.message = noUndlyInstrumentParties;
}

NoUndlyInstrumentParties.prototype.value = function () {
  return this.message;
};

NoUndlyInstrumentParties.Tag = '1058';

NoUndlyInstrumentParties.Type = 'NUMINGROUP';

module.exports = NoUndlyInstrumentParties;