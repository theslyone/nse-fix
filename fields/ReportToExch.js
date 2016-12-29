var invert = require('invert-obj');

function ReportToExch (reportToExch) {
  this.message = reportToExch;
}

ReportToExch.prototype.value = function () {
  return this.message;
};


ReportToExch.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

ReportToExch.Tag = '113';

ReportToExch.Type = 'BOOLEAN';

ReportToExch.Values = invert(ReportToExch.Keys);

module.exports = ReportToExch;