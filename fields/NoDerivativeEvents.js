var invert = require('invert-obj');

function NoDerivativeEvents (noDerivativeEvents) {
  this.message = noDerivativeEvents;
}

NoDerivativeEvents.prototype.value = function () {
  return this.message;
};

NoDerivativeEvents.Tag = '1286';

NoDerivativeEvents.Type = 'NUMINGROUP';

module.exports = NoDerivativeEvents;