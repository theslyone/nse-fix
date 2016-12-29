var invert = require('invert-obj');

function HighPx (highPx) {
  this.message = highPx;
}

HighPx.prototype.value = function () {
  return this.message;
};

HighPx.Tag = '332';

HighPx.Type = 'PRICE';

module.exports = HighPx;