var invert = require('invert-obj');

function UnderlyingPayAmount (underlyingPayAmount) {
  this.message = underlyingPayAmount;
}

UnderlyingPayAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPayAmount.Tag = '985';

UnderlyingPayAmount.Type = 'AMT';

module.exports = UnderlyingPayAmount;