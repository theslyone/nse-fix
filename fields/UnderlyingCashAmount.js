var invert = require('invert-obj');

function UnderlyingCashAmount (underlyingCashAmount) {
  this.message = underlyingCashAmount;
}

UnderlyingCashAmount.prototype.value = function () {
  return this.message;
};

UnderlyingCashAmount.Tag = '973';

UnderlyingCashAmount.Type = 'AMT';

module.exports = UnderlyingCashAmount;