var invert = require('invert-obj');

function MiscFeeCurr (miscFeeCurr) {
  this.message = miscFeeCurr;
}

MiscFeeCurr.prototype.value = function () {
  return this.message;
};

MiscFeeCurr.Tag = '138';

MiscFeeCurr.Type = 'CURRENCY';

module.exports = MiscFeeCurr;