var invert = require('invert-obj');

function PositionLimit (positionLimit) {
  this.message = positionLimit;
}

PositionLimit.prototype.value = function () {
  return this.message;
};

PositionLimit.Tag = '970';

PositionLimit.Type = 'INT';

module.exports = PositionLimit;