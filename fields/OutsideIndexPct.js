var invert = require('invert-obj');

function OutsideIndexPct (outsideIndexPct) {
  this.message = outsideIndexPct;
}

OutsideIndexPct.prototype.value = function () {
  return this.message;
};

OutsideIndexPct.Tag = '407';

OutsideIndexPct.Type = 'PERCENTAGE';

module.exports = OutsideIndexPct;