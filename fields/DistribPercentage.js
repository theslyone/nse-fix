var invert = require('invert-obj');

function DistribPercentage (distribPercentage) {
  this.message = distribPercentage;
}

DistribPercentage.prototype.value = function () {
  return this.message;
};

DistribPercentage.Tag = '512';

DistribPercentage.Type = 'PERCENTAGE';

module.exports = DistribPercentage;