var invert = require('invert-obj');

function CashDistribAgentCode (cashDistribAgentCode) {
  this.message = cashDistribAgentCode;
}

CashDistribAgentCode.prototype.value = function () {
  return this.message;
};

CashDistribAgentCode.Tag = '499';

CashDistribAgentCode.Type = 'STRING';

module.exports = CashDistribAgentCode;