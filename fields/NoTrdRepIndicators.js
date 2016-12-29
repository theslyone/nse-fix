var invert = require('invert-obj');

function NoTrdRepIndicators (noTrdRepIndicators) {
  this.message = noTrdRepIndicators;
}

NoTrdRepIndicators.prototype.value = function () {
  return this.message;
};

NoTrdRepIndicators.Tag = '1387';

NoTrdRepIndicators.Type = 'NUMINGROUP';

module.exports = NoTrdRepIndicators;