var invert = require('invert-obj');

function CashSettlAgentAcctNum (cashSettlAgentAcctNum) {
  this.message = cashSettlAgentAcctNum;
}

CashSettlAgentAcctNum.prototype.value = function () {
  return this.message;
};

CashSettlAgentAcctNum.Tag = '184';

CashSettlAgentAcctNum.Type = 'STRING';

module.exports = CashSettlAgentAcctNum;