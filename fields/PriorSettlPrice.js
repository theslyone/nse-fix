var invert = require('invert-obj');

function PriorSettlPrice (priorSettlPrice) {
  this.message = priorSettlPrice;
}

PriorSettlPrice.prototype.value = function () {
  return this.message;
};

PriorSettlPrice.Tag = '734';

PriorSettlPrice.Type = 'PRICE';

module.exports = PriorSettlPrice;