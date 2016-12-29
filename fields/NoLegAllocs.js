var invert = require('invert-obj');

function NoLegAllocs (noLegAllocs) {
  this.message = noLegAllocs;
}

NoLegAllocs.prototype.value = function () {
  return this.message;
};

NoLegAllocs.Tag = '670';

NoLegAllocs.Type = 'NUMINGROUP';

module.exports = NoLegAllocs;