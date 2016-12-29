var invert = require('invert-obj');

function AllocAvgPx (allocAvgPx) {
  this.message = allocAvgPx;
}

AllocAvgPx.prototype.value = function () {
  return this.message;
};

AllocAvgPx.Tag = '153';

AllocAvgPx.Type = 'PRICE';

module.exports = AllocAvgPx;