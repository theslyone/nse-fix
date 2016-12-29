var invert = require('invert-obj');

function TradeReportRejectReason (tradeReportRejectReason) {
  this.message = tradeReportRejectReason;
}

TradeReportRejectReason.prototype.value = function () {
  return this.message;
};


TradeReportRejectReason.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_PARTY_ONFORMATION': '1',
  'UNKNOWN_INSTRUMENT': '2',
  'UNAUTHORIZED_TO_REPORT_TRADES': '3',
  'INVALID_TRADE_TYPE': '4',
  'OTHER': '99',
};

TradeReportRejectReason.Tag = '751';

TradeReportRejectReason.Type = 'INT';

TradeReportRejectReason.Values = invert(TradeReportRejectReason.Keys);

module.exports = TradeReportRejectReason;