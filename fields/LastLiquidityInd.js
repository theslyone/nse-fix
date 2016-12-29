var invert = require('invert-obj');

function LastLiquidityInd (lastLiquidityInd) {
  this.message = lastLiquidityInd;
}

LastLiquidityInd.prototype.value = function () {
  return this.message;
};


LastLiquidityInd.Keys = {
  'ADDED_LIQUIDITY': '1',
  'REMOVED_LIQUIDITY': '2',
  'LIQUIDITY_ROUTED_OUT': '3',
  'AUCTION': '4',
};

LastLiquidityInd.Tag = '851';

LastLiquidityInd.Type = 'INT';

LastLiquidityInd.Values = invert(LastLiquidityInd.Keys);

module.exports = LastLiquidityInd;