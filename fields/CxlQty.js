var invert = require('invert-obj');

function CxlQty (cxlQty) {
  this.message = cxlQty;
}

CxlQty.prototype.value = function () {
  return this.message;
};

CxlQty.Tag = '84';

CxlQty.Type = 'QTY';

module.exports = CxlQty;