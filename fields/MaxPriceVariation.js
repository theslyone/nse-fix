var invert = require('invert-obj');

function MaxPriceVariation (maxPriceVariation) {
  this.message = maxPriceVariation;
}

MaxPriceVariation.prototype.value = function () {
  return this.message;
};

MaxPriceVariation.Tag = '1143';

MaxPriceVariation.Type = 'FLOAT';

module.exports = MaxPriceVariation;