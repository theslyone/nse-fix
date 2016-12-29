var invert = require('invert-obj');

function SecondaryDisplayQty (secondaryDisplayQty) {
  this.message = secondaryDisplayQty;
}

SecondaryDisplayQty.prototype.value = function () {
  return this.message;
};

SecondaryDisplayQty.Tag = '1082';

SecondaryDisplayQty.Type = 'QTY';

module.exports = SecondaryDisplayQty;