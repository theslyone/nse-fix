var invert = require('invert-obj');

function MinLotSize (minLotSize) {
  this.message = minLotSize;
}

MinLotSize.prototype.value = function () {
  return this.message;
};

MinLotSize.Tag = '1231';

MinLotSize.Type = 'QTY';

module.exports = MinLotSize;