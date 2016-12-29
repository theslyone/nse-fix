var invert = require('invert-obj');

function SideCurrency (sideCurrency) {
  this.message = sideCurrency;
}

SideCurrency.prototype.value = function () {
  return this.message;
};

SideCurrency.Tag = '1154';

SideCurrency.Type = 'CURRENCY';

module.exports = SideCurrency;