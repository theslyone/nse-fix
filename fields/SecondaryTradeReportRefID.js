var invert = require('invert-obj');

function SecondaryTradeReportRefID (secondaryTradeReportRefId) {
  this.message = secondaryTradeReportRefId;
}

SecondaryTradeReportRefID.prototype.value = function () {
  return this.message;
};

SecondaryTradeReportRefID.Tag = '881';

SecondaryTradeReportRefID.Type = 'STRING';

module.exports = SecondaryTradeReportRefID;