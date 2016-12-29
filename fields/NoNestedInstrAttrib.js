var invert = require('invert-obj');

function NoNestedInstrAttrib (noNestedInstrAttrib) {
  this.message = noNestedInstrAttrib;
}

NoNestedInstrAttrib.prototype.value = function () {
  return this.message;
};

NoNestedInstrAttrib.Tag = '1312';

NoNestedInstrAttrib.Type = 'NUMINGROUP';

module.exports = NoNestedInstrAttrib;