var invert = require('invert-obj');

function TradeHandlingInstr (tradeHandlingInstr) {
  this.message = tradeHandlingInstr;
}

TradeHandlingInstr.prototype.value = function () {
  return this.message;
};


TradeHandlingInstr.Keys = {
  'TRADE_CONFIRMATION': '0',
  'TWO_PARTY_REPORT': '1',
  'ONE_PARTY_REPORT_FOR_MATCHING': '2',
  'ONE_PARTY_REPORT_FOR_PASS_THROUGH': '3',
  'AUTOMATED_FLOOR_ORDER_ROUTING': '4',
  'TWO_PARTY_REPORT_FOR_CLAIM': '5',
};

TradeHandlingInstr.Tag = '1123';

TradeHandlingInstr.Type = 'CHAR';

TradeHandlingInstr.Values = invert(TradeHandlingInstr.Keys);

module.exports = TradeHandlingInstr;