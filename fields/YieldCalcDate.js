var invert = require('invert-obj');

function YieldCalcDate (yieldCalcDate) {
  this.message = yieldCalcDate;
}

YieldCalcDate.prototype.value = function () {
  return this.message;
};

YieldCalcDate.Tag = '701';

YieldCalcDate.Type = 'LOCALMKTDATE';

module.exports = YieldCalcDate;