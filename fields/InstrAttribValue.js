var invert = require('invert-obj');

function InstrAttribValue (instrAttribValue) {
  this.message = instrAttribValue;
}

InstrAttribValue.prototype.value = function () {
  return this.message;
};

InstrAttribValue.Tag = '872';

InstrAttribValue.Type = 'STRING';

module.exports = InstrAttribValue;