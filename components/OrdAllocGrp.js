var NoOrders = require('../fields/NoOrders');
var NestedParties2 = require('../components/NestedParties2');
var ClOrdID = require('../fields/ClOrdID');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ListID = require('../fields/ListID');
var OrderQty = require('../fields/OrderQty');
var OrderAvgPx = require('../fields/OrderAvgPx');
var OrderBookingQty = require('../fields/OrderBookingQty');

function OrdAllocGrp (ordAllocGrp) {
  this.message = ordAllocGrp;
}

/* group */

/* component */
OrdAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* field */
OrdAllocGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
OrdAllocGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
OrdAllocGrp.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
OrdAllocGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
OrdAllocGrp.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
OrdAllocGrp.prototype.orderQty = function () {
  return new OrderQty(this.message.tags[OrderQty.Tag]);
};

/* field */
OrdAllocGrp.prototype.orderAvgPx = function () {
  return new OrderAvgPx(this.message.tags[OrderAvgPx.Tag]);
};

/* field */
OrdAllocGrp.prototype.orderBookingQty = function () {
  return new OrderBookingQty(this.message.tags[OrderBookingQty.Tag]);
};

/* end group */

OrdAllocGrp.Tag = '73';

module.exports = OrdAllocGrp;