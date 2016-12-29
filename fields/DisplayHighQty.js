var invert = require('invert-obj');

function DisplayHighQty (displayHighQty) {
  this.message = displayHighQty;
}

DisplayHighQty.prototype.value = function () {
  return this.message;
};

DisplayHighQty.Tag = '1086';

DisplayHighQty.Type = 'QTY';

module.exports = DisplayHighQty;