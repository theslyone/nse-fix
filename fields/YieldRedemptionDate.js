var invert = require('invert-obj');

function YieldRedemptionDate (yieldRedemptionDate) {
  this.message = yieldRedemptionDate;
}

YieldRedemptionDate.prototype.value = function () {
  return this.message;
};

YieldRedemptionDate.Tag = '696';

YieldRedemptionDate.Type = 'LOCALMKTDATE';

module.exports = YieldRedemptionDate;