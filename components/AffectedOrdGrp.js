var NoAffectedOrders = require('../fields/NoAffectedOrders');
var OrigClOrdID = require('../fields/OrigClOrdID');
var AffectedOrderID = require('../fields/AffectedOrderID');
var AffectedSecondaryOrderID = require('../fields/AffectedSecondaryOrderID');

function AffectedOrdGrp (affectedOrdGrp) {
  this.message = affectedOrdGrp;
}

/* group */

/* field */
AffectedOrdGrp.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrigClOrdID.Tag]);
};

/* field */
AffectedOrdGrp.prototype.affectedOrderId = function () {
  return new AffectedOrderID(this.message.tags[AffectedOrderID.Tag]);
};

/* field */
AffectedOrdGrp.prototype.affectedSecondaryOrderId = function () {
  return new AffectedSecondaryOrderID(this.message.tags[AffectedSecondaryOrderID.Tag]);
};

/* end group */

AffectedOrdGrp.Tag = '534';

module.exports = AffectedOrdGrp;