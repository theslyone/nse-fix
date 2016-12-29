var invert = require('invert-obj');

function FillPx (fillPx) {
  this.message = fillPx;
}

FillPx.prototype.value = function () {
  return this.message;
};

FillPx.Tag = '1364';

FillPx.Type = 'PRICE';

module.exports = FillPx;