var invert = require('invert-obj');

function DerivativeNTPositionLimit (derivativeNtpositionLimit) {
  this.message = derivativeNtpositionLimit;
}

DerivativeNTPositionLimit.prototype.value = function () {
  return this.message;
};

DerivativeNTPositionLimit.Tag = '1274';

DerivativeNTPositionLimit.Type = 'INT';

module.exports = DerivativeNTPositionLimit;