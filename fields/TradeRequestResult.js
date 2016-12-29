var invert = require('invert-obj');

function TradeRequestResult (tradeRequestResult) {
  this.message = tradeRequestResult;
}

TradeRequestResult.prototype.value = function () {
  return this.message;
};


TradeRequestResult.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_OR_UNKNOWN_INSTRUMENT': '1',
  'INVALID_TYPE_OF_TRADE_REQUESTED': '2',
  'INVALID_PARTIES': '3',
  'INVALID_TRANSPORT_TYPE_REQUESTED': '4',
  'INVALID_DESTINATION_REQUESTED': '5',
  'TRADEREQUESTTYPE_NOT_SUPPORTED': '8',
  'NOT_AUTHORIZED': '9',
  'OTHER': '99',
};

TradeRequestResult.Tag = '749';

TradeRequestResult.Type = 'INT';

TradeRequestResult.Values = invert(TradeRequestResult.Keys);

module.exports = TradeRequestResult;