var invert = require('invert-obj');

function DerivativeIssuer (derivativeIssuer) {
  this.message = derivativeIssuer;
}

DerivativeIssuer.prototype.value = function () {
  return this.message;
};

DerivativeIssuer.Tag = '1275';

DerivativeIssuer.Type = 'STRING';

module.exports = DerivativeIssuer;