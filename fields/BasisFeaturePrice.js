var invert = require('invert-obj');

function BasisFeaturePrice (basisFeaturePrice) {
  this.message = basisFeaturePrice;
}

BasisFeaturePrice.prototype.value = function () {
  return this.message;
};

BasisFeaturePrice.Tag = '260';

BasisFeaturePrice.Type = 'PRICE';

module.exports = BasisFeaturePrice;