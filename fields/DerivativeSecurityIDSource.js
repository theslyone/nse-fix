var invert = require('invert-obj');

function DerivativeSecurityIDSource (derivativeSecurityIdsource) {
  this.message = derivativeSecurityIdsource;
}

DerivativeSecurityIDSource.prototype.value = function () {
  return this.message;
};

DerivativeSecurityIDSource.Tag = '1217';

DerivativeSecurityIDSource.Type = 'STRING';

module.exports = DerivativeSecurityIDSource;