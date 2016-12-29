var invert = require('invert-obj');

function DiscretionOffsetValue (discretionOffsetValue) {
  this.message = discretionOffsetValue;
}

DiscretionOffsetValue.prototype.value = function () {
  return this.message;
};

DiscretionOffsetValue.Tag = '389';

DiscretionOffsetValue.Type = 'FLOAT';

module.exports = DiscretionOffsetValue;