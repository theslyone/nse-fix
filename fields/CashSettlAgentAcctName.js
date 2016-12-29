var invert = require('invert-obj');

function CashSettlAgentAcctName (cashSettlAgentAcctName) {
  this.message = cashSettlAgentAcctName;
}

CashSettlAgentAcctName.prototype.value = function () {
  return this.message;
};

CashSettlAgentAcctName.Tag = '185';

CashSettlAgentAcctName.Type = 'STRING';

module.exports = CashSettlAgentAcctName;