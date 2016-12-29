var invert = require('invert-obj');

function InstrRegistry (instrRegistry) {
  this.message = instrRegistry;
}

InstrRegistry.prototype.value = function () {
  return this.message;
};

InstrRegistry.Tag = '543';

InstrRegistry.Type = 'STRING';

module.exports = InstrRegistry;