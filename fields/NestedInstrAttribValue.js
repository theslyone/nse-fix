var invert = require('invert-obj');

function NestedInstrAttribValue (nestedInstrAttribValue) {
  this.message = nestedInstrAttribValue;
}

NestedInstrAttribValue.prototype.value = function () {
  return this.message;
};

NestedInstrAttribValue.Tag = '1211';

NestedInstrAttribValue.Type = 'STRING';

module.exports = NestedInstrAttribValue;