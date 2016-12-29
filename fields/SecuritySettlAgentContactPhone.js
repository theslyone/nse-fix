var invert = require('invert-obj');

function SecuritySettlAgentContactPhone (securitySettlAgentContactPhone) {
  this.message = securitySettlAgentContactPhone;
}

SecuritySettlAgentContactPhone.prototype.value = function () {
  return this.message;
};

SecuritySettlAgentContactPhone.Tag = '181';

SecuritySettlAgentContactPhone.Type = 'STRING';

module.exports = SecuritySettlAgentContactPhone;