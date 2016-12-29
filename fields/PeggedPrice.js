var invert = require('invert-obj');

function PeggedPrice (peggedPrice) {
  this.message = peggedPrice;
}

PeggedPrice.prototype.value = function () {
  return this.message;
};

PeggedPrice.Tag = '839';

PeggedPrice.Type = 'PRICE';

module.exports = PeggedPrice;