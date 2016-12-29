var NoUnderlyingAmounts = require('../fields/NoUnderlyingAmounts');
var UnderlyingPayAmount = require('../fields/UnderlyingPayAmount');
var UnderlyingCollectAmount = require('../fields/UnderlyingCollectAmount');
var UnderlyingSettlementDate = require('../fields/UnderlyingSettlementDate');
var UnderlyingSettlementStatus = require('../fields/UnderlyingSettlementStatus');

function UnderlyingAmount (underlyingAmount) {
  this.message = underlyingAmount;
}

/* group */

/* field */
UnderlyingAmount.prototype.underlyingPayAmount = function () {
  return new UnderlyingPayAmount(this.message.tags[UnderlyingPayAmount.Tag]);
};

/* field */
UnderlyingAmount.prototype.underlyingCollectAmount = function () {
  return new UnderlyingCollectAmount(this.message.tags[UnderlyingCollectAmount.Tag]);
};

/* field */
UnderlyingAmount.prototype.underlyingSettlementDate = function () {
  return new UnderlyingSettlementDate(this.message.tags[UnderlyingSettlementDate.Tag]);
};

/* field */
UnderlyingAmount.prototype.underlyingSettlementStatus = function () {
  return new UnderlyingSettlementStatus(this.message.tags[UnderlyingSettlementStatus.Tag]);
};

/* end group */

UnderlyingAmount.Tag = '984';

module.exports = UnderlyingAmount;