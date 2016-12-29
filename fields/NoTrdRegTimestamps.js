var invert = require('invert-obj');

function NoTrdRegTimestamps (noTrdRegTimestamps) {
  this.message = noTrdRegTimestamps;
}

NoTrdRegTimestamps.prototype.value = function () {
  return this.message;
};

NoTrdRegTimestamps.Tag = '768';

NoTrdRegTimestamps.Type = 'NUMINGROUP';

module.exports = NoTrdRegTimestamps;