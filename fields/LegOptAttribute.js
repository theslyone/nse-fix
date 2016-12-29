var invert = require('invert-obj');

function LegOptAttribute (legOptAttribute) {
  this.message = legOptAttribute;
}

LegOptAttribute.prototype.value = function () {
  return this.message;
};

LegOptAttribute.Tag = '613';

LegOptAttribute.Type = 'CHAR';

module.exports = LegOptAttribute;