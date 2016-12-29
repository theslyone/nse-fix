var invert = require('invert-obj');

function QuantityDate (quantityDate) {
  this.message = quantityDate;
}

QuantityDate.prototype.value = function () {
  return this.message;
};

QuantityDate.Tag = '976';

QuantityDate.Type = 'LOCALMKTDATE';

module.exports = QuantityDate;