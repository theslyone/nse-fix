var invert = require('invert-obj');

function Volatility (volatility) {
  this.message = volatility;
}

Volatility.prototype.value = function () {
  return this.message;
};

Volatility.Tag = '1188';

Volatility.Type = 'FLOAT';

module.exports = Volatility;