var invert = require('invert-obj');

function LegStrikePrice (legStrikePrice) {
  this.message = legStrikePrice;
}

LegStrikePrice.prototype.value = function () {
  return this.message;
};

LegStrikePrice.Tag = '612';

LegStrikePrice.Type = 'PRICE';

module.exports = LegStrikePrice;