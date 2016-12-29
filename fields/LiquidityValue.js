var invert = require('invert-obj');

function LiquidityValue (liquidityValue) {
  this.message = liquidityValue;
}

LiquidityValue.prototype.value = function () {
  return this.message;
};

LiquidityValue.Tag = '404';

LiquidityValue.Type = 'AMT';

module.exports = LiquidityValue;