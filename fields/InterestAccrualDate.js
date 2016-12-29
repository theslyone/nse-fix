var invert = require('invert-obj');

function InterestAccrualDate (interestAccrualDate) {
  this.message = interestAccrualDate;
}

InterestAccrualDate.prototype.value = function () {
  return this.message;
};

InterestAccrualDate.Tag = '874';

InterestAccrualDate.Type = 'LOCALMKTDATE';

module.exports = InterestAccrualDate;