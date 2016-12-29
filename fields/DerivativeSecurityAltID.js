var invert = require('invert-obj');

function DerivativeSecurityAltID (derivativeSecurityAltId) {
  this.message = derivativeSecurityAltId;
}

DerivativeSecurityAltID.prototype.value = function () {
  return this.message;
};

DerivativeSecurityAltID.Tag = '1219';

DerivativeSecurityAltID.Type = 'STRING';

module.exports = DerivativeSecurityAltID;