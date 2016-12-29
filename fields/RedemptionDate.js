var invert = require('invert-obj');

function RedemptionDate (redemptionDate) {
  this.message = redemptionDate;
}

RedemptionDate.prototype.value = function () {
  return this.message;
};

RedemptionDate.Tag = '240';

RedemptionDate.Type = 'LOCALMKTDATE';

module.exports = RedemptionDate;