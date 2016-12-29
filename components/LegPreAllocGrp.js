var NoLegAllocs = require('../fields/NoLegAllocs');
var NestedParties2 = require('../components/NestedParties2');
var LegAllocAccount = require('../fields/LegAllocAccount');
var LegIndividualAllocID = require('../fields/LegIndividualAllocID');
var LegAllocQty = require('../fields/LegAllocQty');
var LegAllocAcctIDSource = require('../fields/LegAllocAcctIDSource');
var LegAllocSettlCurrency = require('../fields/LegAllocSettlCurrency');

function LegPreAllocGrp (legPreAllocGrp) {
  this.message = legPreAllocGrp;
}

/* group */

/* component */
LegPreAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* field */
LegPreAllocGrp.prototype.legAllocAccount = function () {
  return new LegAllocAccount(this.message.tags[LegAllocAccount.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legIndividualAllocId = function () {
  return new LegIndividualAllocID(this.message.tags[LegIndividualAllocID.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocQty = function () {
  return new LegAllocQty(this.message.tags[LegAllocQty.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocAcctIdsource = function () {
  return new LegAllocAcctIDSource(this.message.tags[LegAllocAcctIDSource.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocSettlCurrency = function () {
  return new LegAllocSettlCurrency(this.message.tags[LegAllocSettlCurrency.Tag]);
};

/* end group */

LegPreAllocGrp.Tag = '670';

module.exports = LegPreAllocGrp;