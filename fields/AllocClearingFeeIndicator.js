var invert = require('invert-obj');

function AllocClearingFeeIndicator (allocClearingFeeIndicator) {
  this.message = allocClearingFeeIndicator;
}

AllocClearingFeeIndicator.prototype.value = function () {
  return this.message;
};

AllocClearingFeeIndicator.Tag = '1136';

AllocClearingFeeIndicator.Type = 'STRING';

module.exports = AllocClearingFeeIndicator;