var invert = require('invert-obj');

function LateIndicator (lateIndicator) {
  this.message = lateIndicator;
}

LateIndicator.prototype.value = function () {
  return this.message;
};

LateIndicator.Tag = '978';

LateIndicator.Type = 'BOOLEAN';

module.exports = LateIndicator;