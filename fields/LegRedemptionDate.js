var invert = require('invert-obj');

function LegRedemptionDate (legRedemptionDate) {
  this.message = legRedemptionDate;
}

LegRedemptionDate.prototype.value = function () {
  return this.message;
};

LegRedemptionDate.Tag = '254';

LegRedemptionDate.Type = 'LOCALMKTDATE';

module.exports = LegRedemptionDate;