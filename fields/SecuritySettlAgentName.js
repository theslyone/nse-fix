var invert = require('invert-obj');

function SecuritySettlAgentName (securitySettlAgentName) {
  this.message = securitySettlAgentName;
}

SecuritySettlAgentName.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentName.Tag = '176';

SecuritySettlAgentName.Type = 'STRING';

module.exports = SecuritySettlAgentName;