var invert = require('invert-obj');

function AllocAccruedInterestAmt (allocAccruedInterestAmt) {
  this.message = allocAccruedInterestAmt;
}

AllocAccruedInterestAmt.prototype.value = function () {
  return this.message;
};

AllocAccruedInterestAmt.Tag = '742';

AllocAccruedInterestAmt.Type = 'AMT';

module.exports = AllocAccruedInterestAmt;