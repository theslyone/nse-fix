var invert = require('invert-obj');

function MinQty (minQty) {
  this.message = minQty;
}

MinQty.prototype.value = function () {
  return this.message;
};

MinQty.Tag = '110';

MinQty.Type = 'QTY';

module.exports = MinQty;