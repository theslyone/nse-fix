var invert = require('invert-obj');

function BuyVolume (buyVolume) {
  this.message = buyVolume;
}

BuyVolume.prototype.value = function () {
  return this.message;
};

BuyVolume.Tag = '330';

BuyVolume.Type = 'QTY';

module.exports = BuyVolume;