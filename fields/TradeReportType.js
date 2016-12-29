var invert = require('invert-obj');

function TradeReportType (tradeReportType) {
  this.message = tradeReportType;
}

TradeReportType.prototype.value = function () {
  return this.message;
};


TradeReportType.Keys = {
  'SUBMIT': '0',
  'ALLEGED_1': '1',
  'ACCEPT': '2',
  'DECLINE': '3',
  'ADDENDUM': '4',
  'NO_WAS': '5',
  'TRADE_REPORT_CANCEL': '6',
  '7': '7',
  'DEFAULTED': '8',
  'INVALID_CMTA': '9',
  'PENDED': '10',
  'ALLEGED_NEW': '11',
  'ALLEGED_ADDENDUM': '12',
  'ALLEGED_NO_WAS': '13',
  'ALLEGED_TRADE_REPORT_CANCEL': '14',
  'ALLEGED_15': '15',
};

TradeReportType.Tag = '856';

TradeReportType.Type = 'INT';

TradeReportType.Values = invert(TradeReportType.Keys);

module.exports = TradeReportType;