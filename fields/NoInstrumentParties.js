var invert = require('invert-obj');

function NoInstrumentParties (noInstrumentParties) {
  this.message = noInstrumentParties;
}

NoInstrumentParties.prototype.value = function () {
  return this.message;
};

NoInstrumentParties.Tag = '1018';

NoInstrumentParties.Type = 'NUMINGROUP';

module.exports = NoInstrumentParties;