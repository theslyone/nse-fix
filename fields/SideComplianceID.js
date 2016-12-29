var invert = require('invert-obj');

function SideComplianceID (sideComplianceId) {
  this.message = sideComplianceId;
}

SideComplianceID.prototype.value = function () {
  return this.message;
};

SideComplianceID.Tag = '659';

SideComplianceID.Type = 'STRING';

module.exports = SideComplianceID;