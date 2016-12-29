var invert = require('invert-obj');

function LiquidityPctHigh (liquidityPctHigh) {
  this.message = liquidityPctHigh;
}

LiquidityPctHigh.prototype.value = function () {
  return this.message;
};

LiquidityPctHigh.Tag = '403';

LiquidityPctHigh.Type = 'PERCENTAGE';

module.exports = LiquidityPctHigh;