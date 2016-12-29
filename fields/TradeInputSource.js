var invert = require('invert-obj');

function TradeInputSource (tradeInputSource) {
  this.message = tradeInputSource;
}

TradeInputSource.prototype.value = function () {
  return this.message;
};

TradeInputSource.Tag = '578';

TradeInputSource.Type = 'STRING';

module.exports = TradeInputSource;