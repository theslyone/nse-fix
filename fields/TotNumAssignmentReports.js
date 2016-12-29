var invert = require('invert-obj');

function TotNumAssignmentReports (totNumAssignmentReports) {
  this.message = totNumAssignmentReports;
}

TotNumAssignmentReports.prototype.value = function () {
  return this.message;
};

TotNumAssignmentReports.Tag = '832';

TotNumAssignmentReports.Type = 'INT';

module.exports = TotNumAssignmentReports;