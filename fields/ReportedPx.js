var invert = require('invert-obj');

function ReportedPx (reportedPx) {
  this.message = reportedPx;
}

ReportedPx.prototype.value = function () {
  return this.message;
};

ReportedPx.Tag = '861';

ReportedPx.Type = 'PRICE';

module.exports = ReportedPx;