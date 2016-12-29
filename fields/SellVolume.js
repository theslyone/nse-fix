var invert = require('invert-obj');

function SellVolume (sellVolume) {
  this.message = sellVolume;
}

SellVolume.prototype.value = function () {
  return this.message;
};

SellVolume.Tag = '331';

SellVolume.Type = 'QTY';

module.exports = SellVolume;