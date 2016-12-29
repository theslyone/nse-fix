var invert = require('invert-obj');

function DerivativeEncodedIssuer (derivativeEncodedIssuer) {
  this.message = derivativeEncodedIssuer;
}

DerivativeEncodedIssuer.prototype.value = function () {
  return this.message;
};

DerivativeEncodedIssuer.Tag = '1278';

DerivativeEncodedIssuer.Type = 'DATA';

module.exports = DerivativeEncodedIssuer;