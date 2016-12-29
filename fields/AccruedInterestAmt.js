var invert = require('invert-obj');

function AccruedInterestAmt (accruedInterestAmt) {
  this.message = accruedInterestAmt;
}

AccruedInterestAmt.prototype.value = function () {
  return this.message;
};

AccruedInterestAmt.Tag = '159';

AccruedInterestAmt.Type = 'AMT';

module.exports = AccruedInterestAmt;