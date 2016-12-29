var invert = require('invert-obj');

function NoBidComponents (noBidComponents) {
  this.message = noBidComponents;
}

NoBidComponents.prototype.value = function () {
  return this.message;
};

NoBidComponents.Tag = '420';

NoBidComponents.Type = 'NUMINGROUP';

module.exports = NoBidComponents;