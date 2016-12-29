var invert = require('invert-obj');

function LastQty (lastQty) {
  this.message = lastQty;
}

LastQty.prototype.value = function () {
  return this.message;
};

LastQty.Tag = '32';

LastQty.Type = 'QTY';

module.exports = LastQty;