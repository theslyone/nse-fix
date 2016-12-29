var invert = require('invert-obj');

function DerivativeEncodedIssuerLen (derivativeEncodedIssuerLen) {
  this.message = derivativeEncodedIssuerLen;
}

DerivativeEncodedIssuerLen.prototype.value = function () {
  return this.message;
};

DerivativeEncodedIssuerLen.Tag = '1277';

DerivativeEncodedIssuerLen.Type = 'LENGTH';

module.exports = DerivativeEncodedIssuerLen;