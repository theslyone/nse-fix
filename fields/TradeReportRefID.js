var invert = require('invert-obj');

function TradeReportRefID (tradeReportRefId) {
  this.message = tradeReportRefId;
}

TradeReportRefID.prototype.value = function () {
  return this.message;
};

TradeReportRefID.Tag = '572';

TradeReportRefID.Type = 'STRING';

module.exports = TradeReportRefID;