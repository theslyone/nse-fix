var invert = require('invert-obj');

function CashDistribAgentAcctName (cashDistribAgentAcctName) {
  this.message = cashDistribAgentAcctName;
}

CashDistribAgentAcctName.prototype.value = function () {
  return this.message;
};

CashDistribAgentAcctName.Tag = '502';

CashDistribAgentAcctName.Type = 'STRING';

module.exports = CashDistribAgentAcctName;