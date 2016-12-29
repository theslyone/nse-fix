var invert = require('invert-obj');

function LegStrikeCurrency (legStrikeCurrency) {
  this.message = legStrikeCurrency;
}

LegStrikeCurrency.prototype.value = function () {
  return this.message;
};

LegStrikeCurrency.Tag = '942';

LegStrikeCurrency.Type = 'CURRENCY';

module.exports = LegStrikeCurrency;