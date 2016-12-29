var invert = require('invert-obj');

function UnderlyingEndValue (underlyingEndValue) {
  this.message = underlyingEndValue;
}

UnderlyingEndValue.prototype.value = function () {
  return this.message;
};

UnderlyingEndValue.Tag = '886';

UnderlyingEndValue.Type = 'AMT';

module.exports = UnderlyingEndValue;