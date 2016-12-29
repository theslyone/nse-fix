var invert = require('invert-obj');

function SideTradeReportID (sideTradeReportId) {
  this.message = sideTradeReportId;
}

SideTradeReportID.prototype.value = function () {
  return this.message;
};

SideTradeReportID.Tag = '1005';

SideTradeReportID.Type = 'STRING';

module.exports = SideTradeReportID;