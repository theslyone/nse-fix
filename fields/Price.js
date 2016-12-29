var invert = require('invert-obj');

function Price (price) {
  this.message = price;
}

Price.prototype.value = function () {
  return this.message;
};

Price.Tag = '44';

Price.Type = 'PRICE';

module.exports = Price;