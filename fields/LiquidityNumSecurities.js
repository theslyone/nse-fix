var invert = require('invert-obj');

function LiquidityNumSecurities (liquidityNumSecurities) {
  this.message = liquidityNumSecurities;
}

LiquidityNumSecurities.prototype.value = function () {
  return this.message;
};

LiquidityNumSecurities.Tag = '441';

LiquidityNumSecurities.Type = 'INT';

module.exports = LiquidityNumSecurities;