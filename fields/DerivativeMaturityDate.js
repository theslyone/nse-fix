var invert = require('invert-obj');

function DerivativeMaturityDate (derivativeMaturityDate) {
  this.message = derivativeMaturityDate;
}

DerivativeMaturityDate.prototype.value = function () {
  return this.message;
};

DerivativeMaturityDate.Tag = '1252';

DerivativeMaturityDate.Type = 'LOCALMKTDATE';

module.exports = DerivativeMaturityDate;