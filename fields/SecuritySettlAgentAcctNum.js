var invert = require('invert-obj');

function SecuritySettlAgentAcctNum (securitySettlAgentAcctNum) {
  this.message = securitySettlAgentAcctNum;
}

SecuritySettlAgentAcctNum.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentAcctNum.Tag = '178';

SecuritySettlAgentAcctNum.Type = 'STRING';

module.exports = SecuritySettlAgentAcctNum;