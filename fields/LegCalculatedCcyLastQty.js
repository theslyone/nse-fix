var invert = require('invert-obj');

function LegCalculatedCcyLastQty (legCalculatedCcyLastQty) {
  this.message = legCalculatedCcyLastQty;
}

LegCalculatedCcyLastQty.prototype.value = function () {
  return this.message;
};

LegCalculatedCcyLastQty.Tag = '1074';

LegCalculatedCcyLastQty.Type = 'QTY';

module.exports = LegCalculatedCcyLastQty;