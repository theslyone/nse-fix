var invert = require('invert-obj');

function DisplayQty (displayQty) {
  this.message = displayQty;
}

DisplayQty.prototype.value = function () {
  return this.message;
};

DisplayQty.Tag = '1138';

DisplayQty.Type = 'QTY';

module.exports = DisplayQty;