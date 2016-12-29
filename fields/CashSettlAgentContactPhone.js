var invert = require('invert-obj');

function CashSettlAgentContactPhone (cashSettlAgentContactPhone) {
  this.message = cashSettlAgentContactPhone;
}

CashSettlAgentContactPhone.prototype.value = function () {
  return this.message;
};

CashSettlAgentContactPhone.Tag = '187';

CashSettlAgentContactPhone.Type = 'STRING';

module.exports = CashSettlAgentContactPhone;