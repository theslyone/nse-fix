var invert = require('invert-obj');

function NestedInstrAttribType (nestedInstrAttribType) {
  this.message = nestedInstrAttribType;
}

NestedInstrAttribType.prototype.value = function () {
  return this.message;
};

NestedInstrAttribType.Tag = '1210';

NestedInstrAttribType.Type = 'INT';

module.exports = NestedInstrAttribType;