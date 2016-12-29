var invert = require('invert-obj');

function UnderlyingSettlPrice (underlyingSettlPrice) {
  this.message = underlyingSettlPrice;
}

UnderlyingSettlPrice.prototype.value = function () {
  return this.message;
};

UnderlyingSettlPrice.Tag = '732';

UnderlyingSettlPrice.Type = 'PRICE';

module.exports = UnderlyingSettlPrice;