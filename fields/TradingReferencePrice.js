var invert = require('invert-obj');

function TradingReferencePrice (tradingReferencePrice) {
  this.message = tradingReferencePrice;
}

TradingReferencePrice.prototype.value = function () {
  return this.message;
};

TradingReferencePrice.Tag = '1150';

TradingReferencePrice.Type = 'PRICE';

module.exports = TradingReferencePrice;