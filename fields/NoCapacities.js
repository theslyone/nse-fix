var invert = require('invert-obj');

function NoCapacities (noCapacities) {
  this.message = noCapacities;
}

NoCapacities.prototype.value = function () {
  return this.message;
};

NoCapacities.Tag = '862';

NoCapacities.Type = 'NUMINGROUP';

module.exports = NoCapacities;