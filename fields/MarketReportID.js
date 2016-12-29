var invert = require('invert-obj');

function MarketReportID (marketReportId) {
  this.message = marketReportId;
}

MarketReportID.prototype.value = function () {
  return this.message;
};

MarketReportID.Tag = '1394';

MarketReportID.Type = 'STRING';

module.exports = MarketReportID;