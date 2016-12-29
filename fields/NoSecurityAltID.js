var invert = require('invert-obj');

function NoSecurityAltID (noSecurityAltId) {
  this.message = noSecurityAltId;
}

NoSecurityAltID.prototype.value = function () {
  return this.message;
};

NoSecurityAltID.Tag = '454';

NoSecurityAltID.Type = 'NUMINGROUP';

module.exports = NoSecurityAltID;