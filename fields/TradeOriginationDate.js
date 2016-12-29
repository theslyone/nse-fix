var invert = require('invert-obj');

function TradeOriginationDate (tradeOriginationDate) {
  this.message = tradeOriginationDate;
}

TradeOriginationDate.prototype.value = function () {
  return this.message;
};

TradeOriginationDate.Tag = '229';

TradeOriginationDate.Type = 'LOCALMKTDATE';

module.exports = TradeOriginationDate;