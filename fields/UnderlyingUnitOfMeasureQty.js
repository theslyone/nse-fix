var invert = require('invert-obj');

function UnderlyingUnitOfMeasureQty (underlyingUnitOfMeasureQty) {
  this.message = underlyingUnitOfMeasureQty;
}

UnderlyingUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

UnderlyingUnitOfMeasureQty.Tag = '1423';

UnderlyingUnitOfMeasureQty.Type = 'QTY';

module.exports = UnderlyingUnitOfMeasureQty;