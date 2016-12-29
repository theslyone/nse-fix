var invert = require('invert-obj');

function DerivativeTimeUnit (derivativeTimeUnit) {
  this.message = derivativeTimeUnit;
}

DerivativeTimeUnit.prototype.value = function () {
  return this.message;
};

DerivativeTimeUnit.Tag = '1271';

DerivativeTimeUnit.Type = 'STRING';

module.exports = DerivativeTimeUnit;