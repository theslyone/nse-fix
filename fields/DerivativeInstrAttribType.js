var invert = require('invert-obj');

function DerivativeInstrAttribType (derivativeInstrAttribType) {
  this.message = derivativeInstrAttribType;
}

DerivativeInstrAttribType.prototype.value = function () {
  return this.message;
};

DerivativeInstrAttribType.Tag = '1313';

DerivativeInstrAttribType.Type = 'INT';

module.exports = DerivativeInstrAttribType;