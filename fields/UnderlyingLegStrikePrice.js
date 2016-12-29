var invert = require('invert-obj');

function UnderlyingLegStrikePrice (underlyingLegStrikePrice) {
  this.message = underlyingLegStrikePrice;
}

UnderlyingLegStrikePrice.prototype.value = function () {
  return this.message;
};

UnderlyingLegStrikePrice.Tag = '1340';

UnderlyingLegStrikePrice.Type = 'PRICE';

module.exports = UnderlyingLegStrikePrice;