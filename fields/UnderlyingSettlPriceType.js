var invert = require('invert-obj');

function UnderlyingSettlPriceType (underlyingSettlPriceType) {
  this.message = underlyingSettlPriceType;
}

UnderlyingSettlPriceType.prototype.value = function () {
  return this.message;
};

UnderlyingSettlPriceType.Tag = '733';

UnderlyingSettlPriceType.Type = 'INT';

module.exports = UnderlyingSettlPriceType;