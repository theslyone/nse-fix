var invert = require('invert-obj');

function NoDerivativeSecurityAltID (noDerivativeSecurityAltId) {
  this.message = noDerivativeSecurityAltId;
}

NoDerivativeSecurityAltID.prototype.value = function () {
  return this.message;
};

NoDerivativeSecurityAltID.Tag = '1218';

NoDerivativeSecurityAltID.Type = 'NUMINGROUP';

module.exports = NoDerivativeSecurityAltID;