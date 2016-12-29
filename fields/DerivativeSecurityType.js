var invert = require('invert-obj');

function DerivativeSecurityType (derivativeSecurityType) {
  this.message = derivativeSecurityType;
}

DerivativeSecurityType.prototype.value = function () {
  return this.message;
};

DerivativeSecurityType.Tag = '1249';

DerivativeSecurityType.Type = 'STRING';

module.exports = DerivativeSecurityType;