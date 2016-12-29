var invert = require('invert-obj');

function TotalTakedown (totalTakedown) {
  this.message = totalTakedown;
}

TotalTakedown.prototype.value = function () {
  return this.message;
};

TotalTakedown.Tag = '237';

TotalTakedown.Type = 'AMT';

module.exports = TotalTakedown;