var invert = require('invert-obj');

function NoPositions (noPositions) {
  this.message = noPositions;
}

NoPositions.prototype.value = function () {
  return this.message;
};

NoPositions.Tag = '702';

NoPositions.Type = 'NUMINGROUP';

module.exports = NoPositions;