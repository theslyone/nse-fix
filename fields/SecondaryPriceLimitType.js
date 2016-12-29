var invert = require('invert-obj');

function SecondaryPriceLimitType (secondaryPriceLimitType) {
  this.message = secondaryPriceLimitType;
}

SecondaryPriceLimitType.prototype.value = function () {
  return this.message;
};

SecondaryPriceLimitType.Tag = '1305';

SecondaryPriceLimitType.Type = 'INT';

module.exports = SecondaryPriceLimitType;