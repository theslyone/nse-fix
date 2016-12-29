var invert = require('invert-obj');

function UnderlyingOptAttribute (underlyingOptAttribute) {
  this.message = underlyingOptAttribute;
}

UnderlyingOptAttribute.prototype.value = function () {
  return this.message;
};

UnderlyingOptAttribute.Tag = '317';

UnderlyingOptAttribute.Type = 'CHAR';

module.exports = UnderlyingOptAttribute;