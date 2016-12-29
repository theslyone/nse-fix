var invert = require('invert-obj');

function NoBidDescriptors (noBidDescriptors) {
  this.message = noBidDescriptors;
}

NoBidDescriptors.prototype.value = function () {
  return this.message;
};

NoBidDescriptors.Tag = '398';

NoBidDescriptors.Type = 'NUMINGROUP';

module.exports = NoBidDescriptors;