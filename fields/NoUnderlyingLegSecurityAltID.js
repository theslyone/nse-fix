var invert = require('invert-obj');

function NoUnderlyingLegSecurityAltID (noUnderlyingLegSecurityAltId) {
  this.message = noUnderlyingLegSecurityAltId;
}

NoUnderlyingLegSecurityAltID.prototype.value = function () {
  return this.message;
};

NoUnderlyingLegSecurityAltID.Tag = '1334';

NoUnderlyingLegSecurityAltID.Type = 'NUMINGROUP';

module.exports = NoUnderlyingLegSecurityAltID;