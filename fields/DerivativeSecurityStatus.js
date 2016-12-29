var invert = require('invert-obj');

function DerivativeSecurityStatus (derivativeSecurityStatus) {
  this.message = derivativeSecurityStatus;
}

DerivativeSecurityStatus.prototype.value = function () {
  return this.message;
};

DerivativeSecurityStatus.Tag = '1256';

DerivativeSecurityStatus.Type = 'STRING';

module.exports = DerivativeSecurityStatus;