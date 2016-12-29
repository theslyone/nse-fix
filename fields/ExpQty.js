var invert = require('invert-obj');

function ExpQty (expQty) {
  this.message = expQty;
}

ExpQty.prototype.value = function () {
  return this.message;
};

ExpQty.Tag = '983';

ExpQty.Type = 'QTY';

module.exports = ExpQty;