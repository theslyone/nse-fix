var invert = require('invert-obj');

function CashSettlAgentName (cashSettlAgentName) {
  this.message = cashSettlAgentName;
}

CashSettlAgentName.prototype.value = function () {
  return this.message;
};

CashSettlAgentName.Tag = '182';

CashSettlAgentName.Type = 'STRING';

module.exports = CashSettlAgentName;