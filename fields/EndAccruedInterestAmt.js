var invert = require('invert-obj');

function EndAccruedInterestAmt (endAccruedInterestAmt) {
  this.message = endAccruedInterestAmt;
}

EndAccruedInterestAmt.prototype.value = function () {
  return this.message;
};

EndAccruedInterestAmt.Tag = '920';

EndAccruedInterestAmt.Type = 'AMT';

module.exports = EndAccruedInterestAmt;