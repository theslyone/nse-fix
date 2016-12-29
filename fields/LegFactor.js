var invert = require('invert-obj');

function LegFactor (legFactor) {
  this.message = legFactor;
}

LegFactor.prototype.value = function () {
  return this.message;
};

LegFactor.Tag = '253';

LegFactor.Type = 'FLOAT';

module.exports = LegFactor;