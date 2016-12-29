var invert = require('invert-obj');

function ComplianceID (complianceId) {
  this.message = complianceId;
}

ComplianceID.prototype.value = function () {
  return this.message;
};

ComplianceID.Tag = '376';

ComplianceID.Type = 'STRING';

module.exports = ComplianceID;