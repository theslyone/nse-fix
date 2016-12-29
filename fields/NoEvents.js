var invert = require('invert-obj');

function NoEvents (noEvents) {
  this.message = noEvents;
}

NoEvents.prototype.value = function () {
  return this.message;
};

NoEvents.Tag = '864';

NoEvents.Type = 'NUMINGROUP';

module.exports = NoEvents;