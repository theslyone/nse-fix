var invert = require('invert-obj');

function DerivativeInstrRegistry (derivativeInstrRegistry) {
  this.message = derivativeInstrRegistry;
}

DerivativeInstrRegistry.prototype.value = function () {
  return this.message;
};

DerivativeInstrRegistry.Tag = '1257';

DerivativeInstrRegistry.Type = 'STRING';

module.exports = DerivativeInstrRegistry;