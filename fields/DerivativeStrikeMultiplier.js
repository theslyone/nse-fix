var invert = require('invert-obj');

function DerivativeStrikeMultiplier (derivativeStrikeMultiplier) {
  this.message = derivativeStrikeMultiplier;
}

DerivativeStrikeMultiplier.prototype.value = function () {
  return this.message;
};

DerivativeStrikeMultiplier.Tag = '1263';

DerivativeStrikeMultiplier.Type = 'FLOAT';

module.exports = DerivativeStrikeMultiplier;