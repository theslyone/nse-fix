var NoNotAffectedOrders = require('../fields/NoNotAffectedOrders');
var NotAffOrigClOrdID = require('../fields/NotAffOrigClOrdID');
var NotAffectedOrderID = require('../fields/NotAffectedOrderID');

function NotAffectedOrdersGrp (notAffectedOrdersGrp) {
  this.message = notAffectedOrdersGrp;
}

/* group */

/* field */
NotAffectedOrdersGrp.prototype.notAffOrigClOrdId = function () {
  return new NotAffOrigClOrdID(this.message.tags[NotAffOrigClOrdID.Tag]);
};

/* field */
NotAffectedOrdersGrp.prototype.notAffectedOrderId = function () {
  return new NotAffectedOrderID(this.message.tags[NotAffectedOrderID.Tag]);
};

/* end group */

NotAffectedOrdersGrp.Tag = '1370';

module.exports = NotAffectedOrdersGrp;