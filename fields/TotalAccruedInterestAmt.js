var invert = require('invert-obj');

function TotalAccruedInterestAmt (totalAccruedInterestAmt) {
  this.message = totalAccruedInterestAmt;
}

TotalAccruedInterestAmt.prototype.value = function () {
  return this.message;
};

TotalAccruedInterestAmt.Tag = '540';

TotalAccruedInterestAmt.Type = 'AMT';

module.exports = TotalAccruedInterestAmt;