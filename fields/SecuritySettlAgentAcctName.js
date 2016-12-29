var invert = require('invert-obj');

function SecuritySettlAgentAcctName (securitySettlAgentAcctName) {
  this.message = securitySettlAgentAcctName;
}

SecuritySettlAgentAcctName.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentAcctName.Tag = '179';

SecuritySettlAgentAcctName.Type = 'STRING';

module.exports = SecuritySettlAgentAcctName;