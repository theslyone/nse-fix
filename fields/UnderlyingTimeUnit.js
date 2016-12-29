var invert = require('invert-obj');

function UnderlyingTimeUnit (underlyingTimeUnit) {
  this.message = underlyingTimeUnit;
}

UnderlyingTimeUnit.prototype.value = function () {
  return this.message;
};

UnderlyingTimeUnit.Tag = '1000';

UnderlyingTimeUnit.Type = 'STRING';

module.exports = UnderlyingTimeUnit;