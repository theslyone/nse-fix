var invert = require('invert-obj');

function SecurityResponseID (securityResponseId) {
  this.message = securityResponseId;
}

SecurityResponseID.prototype.value = function () {
  return this.message;
};

SecurityResponseID.Tag = '322';

SecurityResponseID.Type = 'STRING';

module.exports = SecurityResponseID;