var invert = require('invert-obj');

function TradeReportID (tradeReportId) {
  this.message = tradeReportId;
}

TradeReportID.prototype.value = function () {
  return this.message;
};

TradeReportID.Tag = '571';

TradeReportID.Type = 'STRING';

module.exports = TradeReportID;