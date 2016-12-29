var NoSides = require('../fields/NoSides');
var Parties = require('../components/Parties');
var PreAllocGrp = require('../components/PreAllocGrp');
var OrderQtyData = require('../components/OrderQtyData');
var CommissionData = require('../components/CommissionData');
var Side = require('../fields/Side');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DayBookingInst = require('../fields/DayBookingInst');
var BookingUnit = require('../fields/BookingUnit');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var QtyType = require('../fields/QtyType');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ForexReq = require('../fields/ForexReq');
var SettlCurrency = require('../fields/SettlCurrency');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var PositionEffect = require('../fields/PositionEffect');
var CoveredOrUncovered = require('../fields/CoveredOrUncovered');
var CashMargin = require('../fields/CashMargin');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var SolicitedFlag = require('../fields/SolicitedFlag');
var SideComplianceID = require('../fields/SideComplianceID');
var SideTimeInForce = require('../fields/SideTimeInForce');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var OrigClOrdID = require('../fields/OrigClOrdID');

function SideCrossOrdModGrp (sideCrossOrdModGrp) {
  this.message = sideCrossOrdModGrp;
}

/* group */

/* component */
SideCrossOrdModGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
SideCrossOrdModGrp.prototype.preAllocGrp = function () {
  return this.message.groups[PreAllocGrp.Tag]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

/* component */
SideCrossOrdModGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
SideCrossOrdModGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* field */
SideCrossOrdModGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[ClOrdLinkID.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[TradeOriginationDate.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeDate.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[DayBookingInst.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[BookingUnit.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.qtyType = function () {
  return new QtyType(this.message.tags[QtyType.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[ForexReq.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.bookingType = function () {
  return new BookingType(this.message.tags[BookingType.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[CoveredOrUncovered.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[CashMargin.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ClearingFeeIndicator.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.sideComplianceId = function () {
  return new SideComplianceID(this.message.tags[SideComplianceID.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.sideTimeInForce = function () {
  return new SideTimeInForce(this.message.tags[SideTimeInForce.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[PreTradeAnonymity.Tag]);
};

/* field */
SideCrossOrdModGrp.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrigClOrdID.Tag]);
};

/* end group */

SideCrossOrdModGrp.Tag = '552';

module.exports = SideCrossOrdModGrp;