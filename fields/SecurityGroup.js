var invert = require('invert-obj');

function SecurityGroup (securityGroup) {
  this.message = securityGroup;
}

SecurityGroup.prototype.value = function () {
  return this.message;
};

SecurityGroup.Tag = '1151';

SecurityGroup.Type = 'STRING';

module.exports = SecurityGroup;