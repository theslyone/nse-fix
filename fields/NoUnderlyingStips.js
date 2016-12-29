var invert = require('invert-obj');

function NoUnderlyingStips (noUnderlyingStips) {
  this.message = noUnderlyingStips;
}

NoUnderlyingStips.prototype.value = function () {
  return this.message;
};

NoUnderlyingStips.Tag = '887';

NoUnderlyingStips.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStips;