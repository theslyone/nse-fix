var invert = require('invert-obj');

function AllocQty (allocQty) {
  this.message = allocQty;
}

AllocQty.prototype.value = function () {
  return this.message;
};

AllocQty.Tag = '80';

AllocQty.Type = 'QTY';

module.exports = AllocQty;