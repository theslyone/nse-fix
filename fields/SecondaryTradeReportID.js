var invert = require('invert-obj');

function SecondaryTradeReportID (secondaryTradeReportId) {
  this.message = secondaryTradeReportId;
}

SecondaryTradeReportID.prototype.value = function () {
  return this.message;
};

SecondaryTradeReportID.Tag = '818';

SecondaryTradeReportID.Type = 'STRING';

module.exports = SecondaryTradeReportID;