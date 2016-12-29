var invert = require('invert-obj');

function TradeRequestID (tradeRequestId) {
  this.message = tradeRequestId;
}

TradeRequestID.prototype.value = function () {
  return this.message;
};

TradeRequestID.Tag = '568';

TradeRequestID.Type = 'STRING';

module.exports = TradeRequestID;