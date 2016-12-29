var invert = require('invert-obj');

function CashSettlAgentContactName (cashSettlAgentContactName) {
  this.message = cashSettlAgentContactName;
}

CashSettlAgentContactName.prototype.value = function () {
  return this.message;
};

CashSettlAgentContactName.Tag = '186';

CashSettlAgentContactName.Type = 'STRING';

module.exports = CashSettlAgentContactName;