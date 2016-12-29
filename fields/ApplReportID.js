var invert = require('invert-obj');

function ApplReportID (applReportId) {
  this.message = applReportId;
}

ApplReportID.prototype.value = function () {
  return this.message;
};

ApplReportID.Tag = '1356';

ApplReportID.Type = 'STRING';

module.exports = ApplReportID;