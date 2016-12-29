var invert = require('invert-obj');

function StartTickPriceRange (startTickPriceRange) {
  this.message = startTickPriceRange;
}

StartTickPriceRange.prototype.value = function () {
  return this.message;
};

StartTickPriceRange.Tag = '1206';

StartTickPriceRange.Type = 'PRICE';

module.exports = StartTickPriceRange;