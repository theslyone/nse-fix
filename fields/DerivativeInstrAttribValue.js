var invert = require('invert-obj');

function DerivativeInstrAttribValue (derivativeInstrAttribValue) {
  this.message = derivativeInstrAttribValue;
}

DerivativeInstrAttribValue.prototype.value = function () {
  return this.message;
};

DerivativeInstrAttribValue.Tag = '1314';

DerivativeInstrAttribValue.Type = 'STRING';

module.exports = DerivativeInstrAttribValue;