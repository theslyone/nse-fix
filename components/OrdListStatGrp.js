var NoOrders = require('../fields/NoOrders');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var CumQty = require('../fields/CumQty');
var OrdStatus = require('../fields/OrdStatus');
var WorkingIndicator = require('../fields/WorkingIndicator');
var LeavesQty = require('../fields/LeavesQty');
var CxlQty = require('../fields/CxlQty');
var AvgPx = require('../fields/AvgPx');
var OrdRejReason = require('../fields/OrdRejReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var OrderID = require('../fields/OrderID');

function OrdListStatGrp (ordListStatGrp) {
  this.message = ordListStatGrp;
}

/* group */

/* field */
OrdListStatGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
OrdListStatGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
OrdListStatGrp.prototype.cumQty = function () {
  return new CumQty(this.message.tags[CumQty.Tag]);
};

/* field */
OrdListStatGrp.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[OrdStatus.Tag]);
};

/* field */
OrdListStatGrp.prototype.workingIndicator = function () {
  return new WorkingIndicator(this.message.tags[WorkingIndicator.Tag]);
};

/* field */
OrdListStatGrp.prototype.leavesQty = function () {
  return new LeavesQty(this.message.tags[LeavesQty.Tag]);
};

/* field */
OrdListStatGrp.prototype.cxlQty = function () {
  return new CxlQty(this.message.tags[CxlQty.Tag]);
};

/* field */
OrdListStatGrp.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[AvgPx.Tag]);
};

/* field */
OrdListStatGrp.prototype.ordRejReason = function () {
  return new OrdRejReason(this.message.tags[OrdRejReason.Tag]);
};

/* field */
OrdListStatGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
OrdListStatGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
OrdListStatGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
OrdListStatGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* end group */

OrdListStatGrp.Tag = '73';

module.exports = OrdListStatGrp;