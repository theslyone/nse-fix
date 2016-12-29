var invert = require('invert-obj');

function DerivativeSecuritySubType (derivativeSecuritySubType) {
  this.message = derivativeSecuritySubType;
}

DerivativeSecuritySubType.prototype.value = function () {
  return this.message;
};

DerivativeSecuritySubType.Tag = '1250';

DerivativeSecuritySubType.Type = 'STRING';

module.exports = DerivativeSecuritySubType;