var invert = require('invert-obj');

function DerivativePositionLimit (derivativePositionLimit) {
  this.message = derivativePositionLimit;
}

DerivativePositionLimit.prototype.value = function () {
  return this.message;
};

DerivativePositionLimit.Tag = '1273';

DerivativePositionLimit.Type = 'INT';

module.exports = DerivativePositionLimit;