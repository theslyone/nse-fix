var invert = require('invert-obj');

function InterestAtMaturity (interestAtMaturity) {
  this.message = interestAtMaturity;
}

InterestAtMaturity.prototype.value = function () {
  return this.message;
};

InterestAtMaturity.Tag = '738';

InterestAtMaturity.Type = 'AMT';

module.exports = InterestAtMaturity;