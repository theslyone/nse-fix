var invert = require('invert-obj');

function ShortQty (shortQty) {
  this.message = shortQty;
}

ShortQty.prototype.value = function () {
  return this.message;
};

ShortQty.Tag = '705';

ShortQty.Type = 'QTY';

module.exports = ShortQty;