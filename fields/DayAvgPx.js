var invert = require('invert-obj');

function DayAvgPx (dayAvgPx) {
  this.message = dayAvgPx;
}

DayAvgPx.prototype.value = function () {
  return this.message;
};

DayAvgPx.Tag = '426';

DayAvgPx.Type = 'PRICE';

module.exports = DayAvgPx;