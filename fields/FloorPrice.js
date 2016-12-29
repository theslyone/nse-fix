var invert = require('invert-obj');

function FloorPrice (floorPrice) {
  this.message = floorPrice;
}

FloorPrice.prototype.value = function () {
  return this.message;
};

FloorPrice.Tag = '1200';

FloorPrice.Type = 'PRICE';

module.exports = FloorPrice;