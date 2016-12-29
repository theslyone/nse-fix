var invert = require('invert-obj');

function TradingCurrency (tradingCurrency) {
  this.message = tradingCurrency;
}

TradingCurrency.prototype.value = function () {
  return this.message;
};

TradingCurrency.Tag = '1245';

TradingCurrency.Type = 'CURRENCY';

module.exports = TradingCurrency;