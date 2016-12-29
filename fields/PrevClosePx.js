var invert = require('invert-obj');

function PrevClosePx (prevClosePx) {
  this.message = prevClosePx;
}

PrevClosePx.prototype.value = function () {
  return this.message;
};

PrevClosePx.Tag = '140';

PrevClosePx.Type = 'PRICE';

module.exports = PrevClosePx;