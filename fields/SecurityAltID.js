var invert = require('invert-obj');

function SecurityAltID (securityAltId) {
  this.message = securityAltId;
}

SecurityAltID.prototype.value = function () {
  return this.message;
};

SecurityAltID.Tag = '455';

SecurityAltID.Type = 'STRING';

module.exports = SecurityAltID;