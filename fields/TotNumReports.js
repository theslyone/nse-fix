var invert = require('invert-obj');

function TotNumReports (totNumReports) {
  this.message = totNumReports;
}

TotNumReports.prototype.value = function () {
  return this.message;
};

TotNumReports.Tag = '911';

TotNumReports.Type = 'INT';

module.exports = TotNumReports;