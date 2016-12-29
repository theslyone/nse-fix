var NoAllocs = require('../fields/NoAllocs');
var NestedParties3 = require('../components/NestedParties3');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var IndividualAllocID = require('../fields/IndividualAllocID');
var AllocQty = require('../fields/AllocQty');

function PreAllocMlegGrp (preAllocMlegGrp) {
  this.message = preAllocMlegGrp;
}

/* group */

/* component */
PreAllocMlegGrp.prototype.nestedParties3 = function () {
  return this.message.groups[NestedParties3.Tag]
    .map(function (nestedParties3) {
      return new NestedParties3(nestedParties3);
  });
};

/* field */
PreAllocMlegGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
PreAllocMlegGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
PreAllocMlegGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
PreAllocMlegGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
PreAllocMlegGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* end group */

PreAllocMlegGrp.Tag = '78';

module.exports = PreAllocMlegGrp;