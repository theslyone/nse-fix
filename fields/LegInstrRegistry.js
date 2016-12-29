var invert = require('invert-obj');

function LegInstrRegistry (legInstrRegistry) {
  this.message = legInstrRegistry;
}

LegInstrRegistry.prototype.value = function () {
  return this.message;
};

LegInstrRegistry.Tag = '599';

LegInstrRegistry.Type = 'STRING';

module.exports = LegInstrRegistry;