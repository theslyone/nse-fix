var invert = require('invert-obj');

function DerivativeEncodedSecurityDesc (derivativeEncodedSecurityDesc) {
  this.message = derivativeEncodedSecurityDesc;
}

DerivativeEncodedSecurityDesc.prototype.value = function () {
  return this.message;
};

DerivativeEncodedSecurityDesc.Tag = '1281';

DerivativeEncodedSecurityDesc.Type = 'DATA';

module.exports = DerivativeEncodedSecurityDesc;