var invert = require('invert-obj');

function LegQty (legQty) {
  this.message = legQty;
}

LegQty.prototype.value = function () {
  return this.message;
};

LegQty.Tag = '687';

LegQty.Type = 'QTY';

module.exports = LegQty;