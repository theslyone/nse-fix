var invert = require('invert-obj');

function SwapPoints (swapPoints) {
  this.message = swapPoints;
}

SwapPoints.prototype.value = function () {
  return this.message;
};

SwapPoints.Tag = '1069';

SwapPoints.Type = 'PRICEOFFSET';

module.exports = SwapPoints;