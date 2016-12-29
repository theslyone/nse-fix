var invert = require('invert-obj');

function NoUnderlyingSecurityAltID (noUnderlyingSecurityAltId) {
  this.message = noUnderlyingSecurityAltId;
}

NoUnderlyingSecurityAltID.prototype.value = function () {
  return this.message;
};

NoUnderlyingSecurityAltID.Tag = '457';

NoUnderlyingSecurityAltID.Type = 'NUMINGROUP';

module.exports = NoUnderlyingSecurityAltID;