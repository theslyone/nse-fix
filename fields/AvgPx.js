var invert = require('invert-obj');

function AvgPx (avgPx) {
  this.message = avgPx;
}

AvgPx.prototype.value = function () {
  return this.message;
};

AvgPx.Tag = '6';

AvgPx.Type = 'PRICE';

module.exports = AvgPx;