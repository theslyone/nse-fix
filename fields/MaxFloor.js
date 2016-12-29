var invert = require('invert-obj');

function MaxFloor (maxFloor) {
  this.message = maxFloor;
}

MaxFloor.prototype.value = function () {
  return this.message;
};

MaxFloor.Tag = '111';

MaxFloor.Type = 'QTY';

module.exports = MaxFloor;