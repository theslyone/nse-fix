var invert = require('invert-obj');

function LastPx (lastPx) {
  this.message = lastPx;
}

LastPx.prototype.value = function () {
  return this.message;
};

LastPx.Tag = '31';

LastPx.Type = 'PRICE';

module.exports = LastPx;