var invert = require('invert-obj');

function TradingSessionSubID (tradingSessionSubId) {
  this.message = tradingSessionSubId;
}

TradingSessionSubID.prototype.value = function () {
  return this.message;
};


TradingSessionSubID.Keys = {
  'PRE_TRADING': '1',
  'OPENING_OR_OPENING_AUCTION': '2',
  '3': '3',
  'CLOSING_OR_CLOSING_AUCTION': '4',
  'POST_TRADING': '5',
  'INTRADAY_AUCTION': '6',
  'QUIESCENT': '7',
};

TradingSessionSubID.Tag = '625';

TradingSessionSubID.Type = 'STRING';

TradingSessionSubID.Values = invert(TradingSessionSubID.Keys);

module.exports = TradingSessionSubID;