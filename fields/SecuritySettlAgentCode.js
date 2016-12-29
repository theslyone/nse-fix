var invert = require('invert-obj');

function SecuritySettlAgentCode (securitySettlAgentCode) {
  this.message = securitySettlAgentCode;
}

SecuritySettlAgentCode.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentCode.Tag = '177';

SecuritySettlAgentCode.Type = 'STRING';

module.exports = SecuritySettlAgentCode;