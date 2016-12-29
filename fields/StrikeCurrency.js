var invert = require('invert-obj');

function StrikeCurrency (strikeCurrency) {
  this.message = strikeCurrency;
}

StrikeCurrency.prototype.value = function () {
  return this.message;
};

StrikeCurrency.Tag = '947';

StrikeCurrency.Type = 'CURRENCY';

module.exports = StrikeCurrency;