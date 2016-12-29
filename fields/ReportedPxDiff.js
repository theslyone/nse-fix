var invert = require('invert-obj');

function ReportedPxDiff (reportedPxDiff) {
  this.message = reportedPxDiff;
}

ReportedPxDiff.prototype.value = function () {
  return this.message;
};

ReportedPxDiff.Tag = '1134';

ReportedPxDiff.Type = 'BOOLEAN';

module.exports = ReportedPxDiff;