var invert = require('invert-obj');

function LegRatioQty (legRatioQty) {
  this.message = legRatioQty;
}

LegRatioQty.prototype.value = function () {
  return this.message;
};

LegRatioQty.Tag = '623';

LegRatioQty.Type = 'FLOAT';

module.exports = LegRatioQty;