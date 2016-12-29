var invert = require('invert-obj');

function FillQty (fillQty) {
  this.message = fillQty;
}

FillQty.prototype.value = function () {
  return this.message;
};

FillQty.Tag = '1365';

FillQty.Type = 'QTY';

module.exports = FillQty;