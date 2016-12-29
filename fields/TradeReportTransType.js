var invert = require('invert-obj');

function TradeReportTransType (tradeReportTransType) {
  this.message = tradeReportTransType;
}

TradeReportTransType.prototype.value = function () {
  return this.message;
};


TradeReportTransType.Keys = {
  'NEW': '0',
  'CANCEL': '1',
  'REPLACE': '2',
  'RELEASE': '3',
  'REVERSE': '4',
  'CANCEL_DUE_TO_BACK_OUT_OF_TRADE': '5',
};

TradeReportTransType.Tag = '487';

TradeReportTransType.Type = 'INT';

TradeReportTransType.Values = invert(TradeReportTransType.Keys);

module.exports = TradeReportTransType;