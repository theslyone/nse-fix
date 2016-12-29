var invert = require('invert-obj');

function TradeID (tradeId) {
  this.message = tradeId;
}

TradeID.prototype.value = function () {
  return this.message;
};

TradeID.Tag = '1003';

TradeID.Type = 'STRING';

module.exports = TradeID;