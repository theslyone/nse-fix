var invert = require('invert-obj');

function DerivativeSecurityID (derivativeSecurityId) {
  this.message = derivativeSecurityId;
}

DerivativeSecurityID.prototype.value = function () {
  return this.message;
};

DerivativeSecurityID.Tag = '1216';

DerivativeSecurityID.Type = 'STRING';

module.exports = DerivativeSecurityID;