var invert = require('invert-obj');

function DerivativeOptPayAmount (derivativeOptPayAmount) {
  this.message = derivativeOptPayAmount;
}

DerivativeOptPayAmount.prototype.value = function () {
  return this.message;
};

DerivativeOptPayAmount.Tag = '1225';

DerivativeOptPayAmount.Type = 'AMT';

module.exports = DerivativeOptPayAmount;