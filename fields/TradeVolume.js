var invert = require('invert-obj');

function TradeVolume (tradeVolume) {
  this.message = tradeVolume;
}

TradeVolume.prototype.value = function () {
  return this.message;
};

TradeVolume.Tag = '1020';

TradeVolume.Type = 'QTY';

module.exports = TradeVolume;