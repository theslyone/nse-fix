var invert = require('invert-obj');

function LegPrice (legPrice) {
  this.message = legPrice;
}

LegPrice.prototype.value = function () {
  return this.message;
};

LegPrice.Tag = '566';

LegPrice.Type = 'PRICE';

module.exports = LegPrice;