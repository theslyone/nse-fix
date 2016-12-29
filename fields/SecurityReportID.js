var invert = require('invert-obj');

function SecurityReportID (securityReportId) {
  this.message = securityReportId;
}

SecurityReportID.prototype.value = function () {
  return this.message;
};

SecurityReportID.Tag = '964';

SecurityReportID.Type = 'INT';

module.exports = SecurityReportID;