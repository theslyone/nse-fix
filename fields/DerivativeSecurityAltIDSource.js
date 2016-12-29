var invert = require('invert-obj');

function DerivativeSecurityAltIDSource (derivativeSecurityAltIdsource) {
  this.message = derivativeSecurityAltIdsource;
}

DerivativeSecurityAltIDSource.prototype.value = function () {
  return this.message;
};

DerivativeSecurityAltIDSource.Tag = '1220';

DerivativeSecurityAltIDSource.Type = 'STRING';

module.exports = DerivativeSecurityAltIDSource;