var invert = require('invert-obj');

function CashDistribAgentName (cashDistribAgentName) {
  this.message = cashDistribAgentName;
}

CashDistribAgentName.prototype.value = function () {
  return this.message;
};

CashDistribAgentName.Tag = '498';

CashDistribAgentName.Type = 'STRING';

module.exports = CashDistribAgentName;