var invert = require('invert-obj');

function PeggedRefPrice (peggedRefPrice) {
  this.message = peggedRefPrice;
}

PeggedRefPrice.prototype.value = function () {
  return this.message;
};

PeggedRefPrice.Tag = '1095';

PeggedRefPrice.Type = 'PRICE';

module.exports = PeggedRefPrice;