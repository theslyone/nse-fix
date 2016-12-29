var NoMDEntries = require('../fields/NoMDEntries');
var Parties = require('../components/Parties');
var YieldData = require('../components/YieldData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var SecSizesGrp = require('../components/SecSizesGrp');
var MDEntryType = require('../fields/MDEntryType');
var MDEntryPx = require('../fields/MDEntryPx');
var Currency = require('../fields/Currency');
var MDEntrySize = require('../fields/MDEntrySize');
var MDEntryDate = require('../fields/MDEntryDate');
var MDEntryTime = require('../fields/MDEntryTime');
var TickDirection = require('../fields/TickDirection');
var MDMkt = require('../fields/MDMkt');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var QuoteCondition = require('../fields/QuoteCondition');
var TradeCondition = require('../fields/TradeCondition');
var MDEntryOriginator = require('../fields/MDEntryOriginator');
var LocationID = require('../fields/LocationID');
var DeskID = require('../fields/DeskID');
var OpenCloseSettlFlag = require('../fields/OpenCloseSettlFlag');
var TimeInForce = require('../fields/TimeInForce');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var MinQty = require('../fields/MinQty');
var ExecInst = require('../fields/ExecInst');
var SellerDays = require('../fields/SellerDays');
var OrderID = require('../fields/OrderID');
var QuoteEntryID = require('../fields/QuoteEntryID');
var MDEntryBuyer = require('../fields/MDEntryBuyer');
var MDEntrySeller = require('../fields/MDEntrySeller');
var NumberOfOrders = require('../fields/NumberOfOrders');
var MDEntryPositionNo = require('../fields/MDEntryPositionNo');
var Scope = require('../fields/Scope');
var PriceDelta = require('../fields/PriceDelta');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MDPriceLevel = require('../fields/MDPriceLevel');
var OrderCapacity = require('../fields/OrderCapacity');
var MDOriginType = require('../fields/MDOriginType');
var HighPx = require('../fields/HighPx');
var LowPx = require('../fields/LowPx');
var TradeVolume = require('../fields/TradeVolume');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var MDQuoteType = require('../fields/MDQuoteType');
var RptSeq = require('../fields/RptSeq');
var DealingCapacity = require('../fields/DealingCapacity');
var MDEntrySpotRate = require('../fields/MDEntrySpotRate');
var MDEntryForwardPoints = require('../fields/MDEntryForwardPoints');
var MDEntryID = require('../fields/MDEntryID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var LotType = require('../fields/LotType');
var SecurityTradingStatus = require('../fields/SecurityTradingStatus');
var HaltReasonChar = require('../fields/HaltReasonChar');

function MDFullGrp (mdfullGrp) {
  this.message = mdfullGrp;
}

/* group */

/* component */
MDFullGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
MDFullGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
MDFullGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
MDFullGrp.prototype.secSizesGrp = function () {
  return this.message.groups[SecSizesGrp.Tag]
    .map(function (secSizesGrp) {
      return new SecSizesGrp(secSizesGrp);
  });
};

/* field */
MDFullGrp.prototype.mdentryType = function () {
  return new MDEntryType(this.message.tags[MDEntryType.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryPx = function () {
  return new MDEntryPx(this.message.tags[MDEntryPx.Tag]);
};

/* field */
MDFullGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
MDFullGrp.prototype.mdentrySize = function () {
  return new MDEntrySize(this.message.tags[MDEntrySize.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryDate = function () {
  return new MDEntryDate(this.message.tags[MDEntryDate.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryTime = function () {
  return new MDEntryTime(this.message.tags[MDEntryTime.Tag]);
};

/* field */
MDFullGrp.prototype.tickDirection = function () {
  return new TickDirection(this.message.tags[TickDirection.Tag]);
};

/* field */
MDFullGrp.prototype.mdmkt = function () {
  return new MDMkt(this.message.tags[MDMkt.Tag]);
};

/* field */
MDFullGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
MDFullGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
MDFullGrp.prototype.quoteCondition = function () {
  return new QuoteCondition(this.message.tags[QuoteCondition.Tag]);
};

/* field */
MDFullGrp.prototype.tradeCondition = function () {
  return new TradeCondition(this.message.tags[TradeCondition.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryOriginator = function () {
  return new MDEntryOriginator(this.message.tags[MDEntryOriginator.Tag]);
};

/* field */
MDFullGrp.prototype.locationId = function () {
  return new LocationID(this.message.tags[LocationID.Tag]);
};

/* field */
MDFullGrp.prototype.deskId = function () {
  return new DeskID(this.message.tags[DeskID.Tag]);
};

/* field */
MDFullGrp.prototype.openCloseSettlFlag = function () {
  return new OpenCloseSettlFlag(this.message.tags[OpenCloseSettlFlag.Tag]);
};

/* field */
MDFullGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
MDFullGrp.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[ExpireDate.Tag]);
};

/* field */
MDFullGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
MDFullGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* field */
MDFullGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
MDFullGrp.prototype.sellerDays = function () {
  return new SellerDays(this.message.tags[SellerDays.Tag]);
};

/* field */
MDFullGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
MDFullGrp.prototype.quoteEntryId = function () {
  return new QuoteEntryID(this.message.tags[QuoteEntryID.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryBuyer = function () {
  return new MDEntryBuyer(this.message.tags[MDEntryBuyer.Tag]);
};

/* field */
MDFullGrp.prototype.mdentrySeller = function () {
  return new MDEntrySeller(this.message.tags[MDEntrySeller.Tag]);
};

/* field */
MDFullGrp.prototype.numberOfOrders = function () {
  return new NumberOfOrders(this.message.tags[NumberOfOrders.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryPositionNo = function () {
  return new MDEntryPositionNo(this.message.tags[MDEntryPositionNo.Tag]);
};

/* field */
MDFullGrp.prototype.scope = function () {
  return new Scope(this.message.tags[Scope.Tag]);
};

/* field */
MDFullGrp.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[PriceDelta.Tag]);
};

/* field */
MDFullGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
MDFullGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
MDFullGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
MDFullGrp.prototype.mdpriceLevel = function () {
  return new MDPriceLevel(this.message.tags[MDPriceLevel.Tag]);
};

/* field */
MDFullGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
MDFullGrp.prototype.mdoriginType = function () {
  return new MDOriginType(this.message.tags[MDOriginType.Tag]);
};

/* field */
MDFullGrp.prototype.highPx = function () {
  return new HighPx(this.message.tags[HighPx.Tag]);
};

/* field */
MDFullGrp.prototype.lowPx = function () {
  return new LowPx(this.message.tags[LowPx.Tag]);
};

/* field */
MDFullGrp.prototype.tradeVolume = function () {
  return new TradeVolume(this.message.tags[TradeVolume.Tag]);
};

/* field */
MDFullGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
MDFullGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
MDFullGrp.prototype.mdquoteType = function () {
  return new MDQuoteType(this.message.tags[MDQuoteType.Tag]);
};

/* field */
MDFullGrp.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[RptSeq.Tag]);
};

/* field */
MDFullGrp.prototype.dealingCapacity = function () {
  return new DealingCapacity(this.message.tags[DealingCapacity.Tag]);
};

/* field */
MDFullGrp.prototype.mdentrySpotRate = function () {
  return new MDEntrySpotRate(this.message.tags[MDEntrySpotRate.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryForwardPoints = function () {
  return new MDEntryForwardPoints(this.message.tags[MDEntryForwardPoints.Tag]);
};

/* field */
MDFullGrp.prototype.mdentryId = function () {
  return new MDEntryID(this.message.tags[MDEntryID.Tag]);
};

/* field */
MDFullGrp.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
MDFullGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
MDFullGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
MDFullGrp.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
MDFullGrp.prototype.securityTradingStatus = function () {
  return new SecurityTradingStatus(this.message.tags[SecurityTradingStatus.Tag]);
};

/* field */
MDFullGrp.prototype.haltReasonChar = function () {
  return new HaltReasonChar(this.message.tags[HaltReasonChar.Tag]);
};

/* end group */

MDFullGrp.Tag = '268';

module.exports = MDFullGrp;