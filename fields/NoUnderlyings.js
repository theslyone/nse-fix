var invert = require('invert-obj');

function NoUnderlyings (noUnderlyings) {
  this.message = noUnderlyings;
}

NoUnderlyings.prototype.value = function () {
  return this.message;
};

NoUnderlyings.Tag = '711';

NoUnderlyings.Type = 'NUMINGROUP';

module.exports = NoUnderlyings;