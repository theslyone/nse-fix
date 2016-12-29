var invert = require('invert-obj');

function NoLegs (noLegs) {
  this.message = noLegs;
}

NoLegs.prototype.value = function () {
  return this.message;
};

NoLegs.Tag = '555';

NoLegs.Type = 'NUMINGROUP';

module.exports = NoLegs;