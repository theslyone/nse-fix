var invert = require('invert-obj');

function UnderlyingStrikePrice (underlyingStrikePrice) {
  this.message = underlyingStrikePrice;
}

UnderlyingStrikePrice.prototype.value = function () {
  return this.message;
};

UnderlyingStrikePrice.Tag = '316';

UnderlyingStrikePrice.Type = 'PRICE';

module.exports = UnderlyingStrikePrice;