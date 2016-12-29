var invert = require('invert-obj');

function StrikePrice (strikePrice) {
  this.message = strikePrice;
}

StrikePrice.prototype.value = function () {
  return this.message;
};

StrikePrice.Tag = '202';

StrikePrice.Type = 'PRICE';

module.exports = StrikePrice;