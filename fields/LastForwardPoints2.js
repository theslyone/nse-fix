var invert = require('invert-obj');

function LastForwardPoints2 (lastForwardPoints2) {
  this.message = lastForwardPoints2;
}

LastForwardPoints2.prototype.value = function () {
  return this.message;
};

LastForwardPoints2.Tag = '641';

LastForwardPoints2.Type = 'PRICEOFFSET';

module.exports = LastForwardPoints2;