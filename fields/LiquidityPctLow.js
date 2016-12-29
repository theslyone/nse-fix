var invert = require('invert-obj');

function LiquidityPctLow (liquidityPctLow) {
  this.message = liquidityPctLow;
}

LiquidityPctLow.prototype.value = function () {
  return this.message;
};

LiquidityPctLow.Tag = '402';

LiquidityPctLow.Type = 'PERCENTAGE';

module.exports = LiquidityPctLow;