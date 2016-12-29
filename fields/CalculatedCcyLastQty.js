var invert = require('invert-obj');

function CalculatedCcyLastQty (calculatedCcyLastQty) {
  this.message = calculatedCcyLastQty;
}

CalculatedCcyLastQty.prototype.value = function () {
  return this.message;
};

CalculatedCcyLastQty.Tag = '1056';

CalculatedCcyLastQty.Type = 'QTY';

module.exports = CalculatedCcyLastQty;