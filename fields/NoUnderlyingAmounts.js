var invert = require('invert-obj');

function NoUnderlyingAmounts (noUnderlyingAmounts) {
  this.message = noUnderlyingAmounts;
}

NoUnderlyingAmounts.prototype.value = function () {
  return this.message;
};

NoUnderlyingAmounts.Tag = '984';

NoUnderlyingAmounts.Type = 'NUMINGROUP';

module.exports = NoUnderlyingAmounts;