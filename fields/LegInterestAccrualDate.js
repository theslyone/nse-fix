var invert = require('invert-obj');

function LegInterestAccrualDate (legInterestAccrualDate) {
  this.message = legInterestAccrualDate;
}

LegInterestAccrualDate.prototype.value = function () {
  return this.message;
};

LegInterestAccrualDate.Tag = '956';

LegInterestAccrualDate.Type = 'LOCALMKTDATE';

module.exports = LegInterestAccrualDate;