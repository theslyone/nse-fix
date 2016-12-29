var invert = require('invert-obj');

function ContAmtCurr (contAmtCurr) {
  this.message = contAmtCurr;
}

ContAmtCurr.prototype.value = function () {
  return this.message;
};

ContAmtCurr.Tag = '521';

ContAmtCurr.Type = 'CURRENCY';

module.exports = ContAmtCurr;