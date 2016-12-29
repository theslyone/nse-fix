var invert = require('invert-obj');

function LegCurrencyRatio (legCurrencyRatio) {
  this.message = legCurrencyRatio;
}

LegCurrencyRatio.prototype.value = function () {
  return this.message;
};

LegCurrencyRatio.Tag = '1383';

LegCurrencyRatio.Type = 'FLOAT';

module.exports = LegCurrencyRatio;