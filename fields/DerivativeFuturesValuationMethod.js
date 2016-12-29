var invert = require('invert-obj');

function DerivativeFuturesValuationMethod (derivativeFuturesValuationMethod) {
  this.message = derivativeFuturesValuationMethod;
}

DerivativeFuturesValuationMethod.prototype.value = function () {
  return this.message;
};

DerivativeFuturesValuationMethod.Tag = '1319';

DerivativeFuturesValuationMethod.Type = 'STRING';

module.exports = DerivativeFuturesValuationMethod;