var invert = require('invert-obj');

function Quantity (quantity) {
  this.message = quantity;
}

Quantity.prototype.value = function () {
  return this.message;
};

Quantity.Tag = '53';

Quantity.Type = 'QTY';

module.exports = Quantity;