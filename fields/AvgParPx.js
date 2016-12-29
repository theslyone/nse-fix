var invert = require('invert-obj');

function AvgParPx (avgParPx) {
  this.message = avgParPx;
}

AvgParPx.prototype.value = function () {
  return this.message;
};

AvgParPx.Tag = '860';

AvgParPx.Type = 'PRICE';

module.exports = AvgParPx;