var invert = require('invert-obj');

function FirstPx (firstPx) {
  this.message = firstPx;
}

FirstPx.prototype.value = function () {
  return this.message;
};

FirstPx.Tag = '1025';

FirstPx.Type = 'PRICE';

module.exports = FirstPx;