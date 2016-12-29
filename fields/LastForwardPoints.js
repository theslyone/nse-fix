var invert = require('invert-obj');

function LastForwardPoints (lastForwardPoints) {
  this.message = lastForwardPoints;
}

LastForwardPoints.prototype.value = function () {
  return this.message;
};

LastForwardPoints.Tag = '195';

LastForwardPoints.Type = 'PRICEOFFSET';

module.exports = LastForwardPoints;