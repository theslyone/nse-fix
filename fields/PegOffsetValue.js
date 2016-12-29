var invert = require('invert-obj');

function PegOffsetValue (pegOffsetValue) {
  this.message = pegOffsetValue;
}

PegOffsetValue.prototype.value = function () {
  return this.message;
};

PegOffsetValue.Tag = '211';

PegOffsetValue.Type = 'FLOAT';

module.exports = PegOffsetValue;