var invert = require('invert-obj');

function UnderlyingStartValue (underlyingStartValue) {
  this.message = underlyingStartValue;
}

UnderlyingStartValue.prototype.value = function () {
  return this.message;
};

UnderlyingStartValue.Tag = '884';

UnderlyingStartValue.Type = 'AMT';

module.exports = UnderlyingStartValue;