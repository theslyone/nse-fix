var invert = require('invert-obj');

function MassActionReportID (massActionReportId) {
  this.message = massActionReportId;
}

MassActionReportID.prototype.value = function () {
  return this.message;
};

MassActionReportID.Tag = '1369';

MassActionReportID.Type = 'STRING';

module.exports = MassActionReportID;