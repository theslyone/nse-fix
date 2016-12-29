var invert = require('invert-obj');

function LastParPx (lastParPx) {
  this.message = lastParPx;
}

LastParPx.prototype.value = function () {
  return this.message;
};

LastParPx.Tag = '669';

LastParPx.Type = 'PRICE';

module.exports = LastParPx;