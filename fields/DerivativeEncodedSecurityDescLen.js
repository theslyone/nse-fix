var invert = require('invert-obj');

function DerivativeEncodedSecurityDescLen (derivativeEncodedSecurityDescLen) {
  this.message = derivativeEncodedSecurityDescLen;
}

DerivativeEncodedSecurityDescLen.prototype.value = function () {
  return this.message;
};

DerivativeEncodedSecurityDescLen.Tag = '1280';

DerivativeEncodedSecurityDescLen.Type = 'LENGTH';

module.exports = DerivativeEncodedSecurityDescLen;