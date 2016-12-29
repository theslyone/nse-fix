var invert = require('invert-obj');

function UnderlyingStipValue (underlyingStipValue) {
  this.message = underlyingStipValue;
}

UnderlyingStipValue.prototype.value = function () {
  return this.message;
};

UnderlyingStipValue.Tag = '889';

UnderlyingStipValue.Type = 'STRING';

module.exports = UnderlyingStipValue;