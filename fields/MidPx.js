var invert = require('invert-obj');

function MidPx (midPx) {
  this.message = midPx;
}

MidPx.prototype.value = function () {
  return this.message;
};

MidPx.Tag = '631';

MidPx.Type = 'PRICE';

module.exports = MidPx;