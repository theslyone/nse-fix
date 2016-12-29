var invert = require('invert-obj');

function CashDistribAgentAcctNumber (cashDistribAgentAcctNumber) {
  this.message = cashDistribAgentAcctNumber;
}

CashDistribAgentAcctNumber.prototype.value = function () {
  return this.message;
};

CashDistribAgentAcctNumber.Tag = '500';

CashDistribAgentAcctNumber.Type = 'STRING';

module.exports = CashDistribAgentAcctNumber;