var invert = require('invert-obj');

function TradeRequestStatus (tradeRequestStatus) {
  this.message = tradeRequestStatus;
}

TradeRequestStatus.prototype.value = function () {
  return this.message;
};


TradeRequestStatus.Keys = {
  'ACCEPTED': '0',
  'COMPLETED': '1',
  'REJECTED': '2',
};

TradeRequestStatus.Tag = '750';

TradeRequestStatus.Type = 'INT';

TradeRequestStatus.Values = invert(TradeRequestStatus.Keys);

module.exports = TradeRequestStatus;