var invert = require('invert-obj');

function AllocInterestAtMaturity (allocInterestAtMaturity) {
  this.message = allocInterestAtMaturity;
}

AllocInterestAtMaturity.prototype.value = function () {
  return this.message;
};

AllocInterestAtMaturity.Tag = '741';

AllocInterestAtMaturity.Type = 'AMT';

module.exports = AllocInterestAtMaturity;