var invert = require('invert-obj');

function CapPrice (capPrice) {
  this.message = capPrice;
}

CapPrice.prototype.value = function () {
  return this.message;
};

CapPrice.Tag = '1199';

CapPrice.Type = 'PRICE';

module.exports = CapPrice;