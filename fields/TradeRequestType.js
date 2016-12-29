var invert = require('invert-obj');

function TradeRequestType (tradeRequestType) {
  this.message = tradeRequestType;
}

TradeRequestType.prototype.value = function () {
  return this.message;
};


TradeRequestType.Keys = {
  'ALL_TRADES': '0',
  'MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST': '1',
  'UNMATCHED_TRADES_THAT_MATCH_CRITERIA': '2',
  'UNREPORTED_TRADES_THAT_MATCH_CRITERIA': '3',
  'ADVISORIES_THAT_MATCH_CRITERIA': '4',
};

TradeRequestType.Tag = '569';

TradeRequestType.Type = 'INT';

TradeRequestType.Values = invert(TradeRequestType.Keys);

module.exports = TradeRequestType;