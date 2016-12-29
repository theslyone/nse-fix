var invert = require('invert-obj');

function TradingSessionID (tradingSessionId) {
  this.message = tradingSessionId;
}

TradingSessionID.prototype.value = function () {
  return this.message;
};


TradingSessionID.Keys = {
  'DAY': '1',
  'HALFDAY': '2',
  'MORNING': '3',
  'AFTERNOON': '4',
  'EVENING': '5',
  'AFTER_HOURS': '6',
};

TradingSessionID.Tag = '336';

TradingSessionID.Type = 'STRING';

TradingSessionID.Values = invert(TradingSessionID.Keys);

module.exports = TradingSessionID;