var invert = require('invert-obj');

function UnderlyingInstrRegistry (underlyingInstrRegistry) {
  this.message = underlyingInstrRegistry;
}

UnderlyingInstrRegistry.prototype.value = function () {
  return this.message;
};

UnderlyingInstrRegistry.Tag = '595';

UnderlyingInstrRegistry.Type = 'STRING';

module.exports = UnderlyingInstrRegistry;