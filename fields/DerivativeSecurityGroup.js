var invert = require('invert-obj');

function DerivativeSecurityGroup (derivativeSecurityGroup) {
  this.message = derivativeSecurityGroup;
}

DerivativeSecurityGroup.prototype.value = function () {
  return this.message;
};

DerivativeSecurityGroup.Tag = '1247';

DerivativeSecurityGroup.Type = 'STRING';

module.exports = DerivativeSecurityGroup;