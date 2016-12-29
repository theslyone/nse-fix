var invert = require('invert-obj');

function CashSettlAgentCode (cashSettlAgentCode) {
  this.message = cashSettlAgentCode;
}

CashSettlAgentCode.prototype.value = function () {
  return this.message;
};

CashSettlAgentCode.Tag = '183';

CashSettlAgentCode.Type = 'STRING';

module.exports = CashSettlAgentCode;