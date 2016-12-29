var invert = require('invert-obj');

function PriceDelta (priceDelta) {
  this.message = priceDelta;
}

PriceDelta.prototype.value = function () {
  return this.message;
};

PriceDelta.Tag = '811';

PriceDelta.Type = 'FLOAT';

module.exports = PriceDelta;