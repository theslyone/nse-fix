var invert = require('invert-obj');

function BasisFeatureDate (basisFeatureDate) {
  this.message = basisFeatureDate;
}

BasisFeatureDate.prototype.value = function () {
  return this.message;
};

BasisFeatureDate.Tag = '259';

BasisFeatureDate.Type = 'LOCALMKTDATE';

module.exports = BasisFeatureDate;