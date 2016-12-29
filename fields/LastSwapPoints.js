var invert = require('invert-obj');

function LastSwapPoints (lastSwapPoints) {
  this.message = lastSwapPoints;
}

LastSwapPoints.prototype.value = function () {
  return this.message;
};

LastSwapPoints.Tag = '1071';

LastSwapPoints.Type = 'PRICEOFFSET';

module.exports = LastSwapPoints;