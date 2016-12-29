var invert = require('invert-obj');

function DerivativePutOrCall (derivativePutOrCall) {
  this.message = derivativePutOrCall;
}

DerivativePutOrCall.prototype.value = function () {
  return this.message;
};

DerivativePutOrCall.Tag = '1323';

DerivativePutOrCall.Type = 'INT';

module.exports = DerivativePutOrCall;