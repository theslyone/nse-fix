var invert = require('invert-obj');

function DerivativeMaturityTime (derivativeMaturityTime) {
  this.message = derivativeMaturityTime;
}

DerivativeMaturityTime.prototype.value = function () {
  return this.message;
};

DerivativeMaturityTime.Tag = '1253';

DerivativeMaturityTime.Type = 'TZTIMEONLY';

module.exports = DerivativeMaturityTime;