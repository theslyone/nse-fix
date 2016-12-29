var invert = require('invert-obj');

function DiscretionPrice (discretionPrice) {
  this.message = discretionPrice;
}

DiscretionPrice.prototype.value = function () {
  return this.message;
};

DiscretionPrice.Tag = '845';

DiscretionPrice.Type = 'PRICE';

module.exports = DiscretionPrice;