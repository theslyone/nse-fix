var invert = require('invert-obj');

function EndTickPriceRange (endTickPriceRange) {
  this.message = endTickPriceRange;
}

EndTickPriceRange.prototype.value = function () {
  return this.message;
};

EndTickPriceRange.Tag = '1207';

EndTickPriceRange.Type = 'PRICE';

module.exports = EndTickPriceRange;