var invert = require('invert-obj');

function LegReportID (legReportId) {
  this.message = legReportId;
}

LegReportID.prototype.value = function () {
  return this.message;
};

LegReportID.Tag = '990';

LegReportID.Type = 'STRING';

module.exports = LegReportID;