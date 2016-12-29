var invert = require('invert-obj');

function UnderlyingRedemptionDate (underlyingRedemptionDate) {
  this.message = underlyingRedemptionDate;
}

UnderlyingRedemptionDate.prototype.value = function () {
  return this.message;
};

UnderlyingRedemptionDate.Tag = '247';

UnderlyingRedemptionDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingRedemptionDate;