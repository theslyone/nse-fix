var invert = require('invert-obj');

function UnitOfMeasureQty (unitOfMeasureQty) {
  this.message = unitOfMeasureQty;
}

UnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

UnitOfMeasureQty.Tag = '1147';

UnitOfMeasureQty.Type = 'QTY';

module.exports = UnitOfMeasureQty;