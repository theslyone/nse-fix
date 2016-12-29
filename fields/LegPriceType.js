var invert = require('invert-obj');

function LegPriceType (legPriceType) {
  this.message = legPriceType;
}

LegPriceType.prototype.value = function () {
  return this.message;
};

LegPriceType.Tag = '686';

LegPriceType.Type = 'INT';

module.exports = LegPriceType;