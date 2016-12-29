var invert = require('invert-obj');

function CashDistribCurr (cashDistribCurr) {
  this.message = cashDistribCurr;
}

CashDistribCurr.prototype.value = function () {
  return this.message;
};

CashDistribCurr.Tag = '478';

CashDistribCurr.Type = 'CURRENCY';

module.exports = CashDistribCurr;