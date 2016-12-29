var invert = require('invert-obj');

function SecuritySettlAgentContactName (securitySettlAgentContactName) {
  this.message = securitySettlAgentContactName;
}

SecuritySettlAgentContactName.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentContactName.Tag = '180';

SecuritySettlAgentContactName.Type = 'STRING';

module.exports = SecuritySettlAgentContactName;