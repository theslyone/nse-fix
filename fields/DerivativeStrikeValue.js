var invert = require('invert-obj');

function DerivativeStrikeValue (derivativeStrikeValue) {
  this.message = derivativeStrikeValue;
}

DerivativeStrikeValue.prototype.value = function () {
  return this.message;
};

DerivativeStrikeValue.Tag = '1264';

DerivativeStrikeValue.Type = 'FLOAT';

module.exports = DerivativeStrikeValue;