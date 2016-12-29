var invert = require('invert-obj');

function DerivativeSecurityDesc (derivativeSecurityDesc) {
  this.message = derivativeSecurityDesc;
}

DerivativeSecurityDesc.prototype.value = function () {
  return this.message;
};

DerivativeSecurityDesc.Tag = '1279';

DerivativeSecurityDesc.Type = 'STRING';

module.exports = DerivativeSecurityDesc;