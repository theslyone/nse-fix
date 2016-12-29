var invert = require('invert-obj');

function DerivativeFloorPrice (derivativeFloorPrice) {
  this.message = derivativeFloorPrice;
}

DerivativeFloorPrice.prototype.value = function () {
  return this.message;
};

DerivativeFloorPrice.Tag = '1322';

DerivativeFloorPrice.Type = 'PRICE';

module.exports = DerivativeFloorPrice;