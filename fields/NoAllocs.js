var invert = require('invert-obj');

function NoAllocs (noAllocs) {
  this.message = noAllocs;
}

NoAllocs.prototype.value = function () {
  return this.message;
};

NoAllocs.Tag = '78';

NoAllocs.Type = 'NUMINGROUP';

module.exports = NoAllocs;