var invert = require('invert-obj');

function NoIOIQualifiers (noIoiqualifiers) {
  this.message = noIoiqualifiers;
}

NoIOIQualifiers.prototype.value = function () {
  return this.message;
};

NoIOIQualifiers.Tag = '199';

NoIOIQualifiers.Type = 'NUMINGROUP';

module.exports = NoIOIQualifiers;