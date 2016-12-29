var invert = require('invert-obj');

function TradeDate (tradeDate) {
  this.message = tradeDate;
}

TradeDate.prototype.value = function () {
  return this.message;
};

TradeDate.Tag = '75';

TradeDate.Type = 'LOCALMKTDATE';

module.exports = TradeDate;