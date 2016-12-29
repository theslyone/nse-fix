var invert = require('invert-obj');

function AccruedInterestRate (accruedInterestRate) {
  this.message = accruedInterestRate;
}

AccruedInterestRate.prototype.value = function () {
  return this.message;
};

AccruedInterestRate.Tag = '158';

AccruedInterestRate.Type = 'PERCENTAGE';

module.exports = AccruedInterestRate;