var invert = require('invert-obj');

function CashDistribPayRef (cashDistribPayRef) {
  this.message = cashDistribPayRef;
}

CashDistribPayRef.prototype.value = function () {
  return this.message;
};

CashDistribPayRef.Tag = '501';

CashDistribPayRef.Type = 'STRING';

module.exports = CashDistribPayRef;