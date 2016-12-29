var invert = require('invert-obj');

function UnderlyingCurrentValue (underlyingCurrentValue) {
  this.message = underlyingCurrentValue;
}

UnderlyingCurrentValue.prototype.value = function () {
  return this.message;
};

UnderlyingCurrentValue.Tag = '885';

UnderlyingCurrentValue.Type = 'AMT';

module.exports = UnderlyingCurrentValue;