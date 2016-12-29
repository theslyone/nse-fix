var invert = require('invert-obj');

function StopPx (stopPx) {
  this.message = stopPx;
}

StopPx.prototype.value = function () {
  return this.message;
};

StopPx.Tag = '99';

StopPx.Type = 'PRICE';

module.exports = StopPx;