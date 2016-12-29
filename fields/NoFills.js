var invert = require('invert-obj');

function NoFills (noFills) {
  this.message = noFills;
}

NoFills.prototype.value = function () {
  return this.message;
};

NoFills.Tag = '1362';

NoFills.Type = 'NUMINGROUP';

module.exports = NoFills;