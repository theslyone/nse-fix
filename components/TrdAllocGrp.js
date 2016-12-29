var NoAllocs = require('../fields/NoAllocs');
var NestedParties2 = require('../components/NestedParties2');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var IndividualAllocID = require('../fields/IndividualAllocID');
var AllocQty = require('../fields/AllocQty');
var AllocCustomerCapacity = require('../fields/AllocCustomerCapacity');
var AllocMethod = require('../fields/AllocMethod');
var SecondaryIndividualAllocID = require('../fields/SecondaryIndividualAllocID');
var AllocClearingFeeIndicator = require('../fields/AllocClearingFeeIndicator');

function TrdAllocGrp (trdAllocGrp) {
  this.message = trdAllocGrp;
}

/* group */

/* component */
TrdAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* field */
TrdAllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
TrdAllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocCustomerCapacity = function () {
  return new AllocCustomerCapacity(this.message.tags[AllocCustomerCapacity.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocMethod = function () {
  return new AllocMethod(this.message.tags[AllocMethod.Tag]);
};

/* field */
TrdAllocGrp.prototype.secondaryIndividualAllocId = function () {
  return new SecondaryIndividualAllocID(this.message.tags[SecondaryIndividualAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocClearingFeeIndicator = function () {
  return new AllocClearingFeeIndicator(this.message.tags[AllocClearingFeeIndicator.Tag]);
};

/* end group */

TrdAllocGrp.Tag = '78';

module.exports = TrdAllocGrp;