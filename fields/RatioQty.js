var invert = require('invert-obj');

function RatioQty (ratioQty) {
  this.message = ratioQty;
}

RatioQty.prototype.value = function () {
  return this.message;
};

RatioQty.Tag = '319';

RatioQty.Type = 'QTY';

module.exports = RatioQty;