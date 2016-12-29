var invert = require('invert-obj');

function DerivativeEventType (derivativeEventType) {
  this.message = derivativeEventType;
}

DerivativeEventType.prototype.value = function () {
  return this.message;
};

DerivativeEventType.Tag = '1287';

DerivativeEventType.Type = 'INT';

module.exports = DerivativeEventType;