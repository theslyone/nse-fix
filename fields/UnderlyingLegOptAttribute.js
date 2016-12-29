var invert = require('invert-obj');

function UnderlyingLegOptAttribute (underlyingLegOptAttribute) {
  this.message = underlyingLegOptAttribute;
}

UnderlyingLegOptAttribute.prototype.value = function () {
  return this.message;
};

UnderlyingLegOptAttribute.Tag = '1391';

UnderlyingLegOptAttribute.Type = 'CHAR';

module.exports = UnderlyingLegOptAttribute;