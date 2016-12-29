var NoOrders = require('../fields/NoOrders');
var Parties = require('../components/Parties');
var PreAllocGrp = require('../components/PreAllocGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var OrderQtyData = require('../components/OrderQtyData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var CommissionData = require('../components/CommissionData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var DisplayInstruction = require('../components/DisplayInstruction');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ListSeqNo = require('../fields/ListSeqNo');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var SettlInstMode = require('../fields/SettlInstMode');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DayBookingInst = require('../fields/DayBookingInst');
var BookingUnit = require('../fields/BookingUnit');
var AllocID = require('../fields/AllocID');
var PreallocMethod = require('../fields/PreallocMethod');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var CashMargin = require('../fields/CashMargin');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var HandlInst = require('../fields/HandlInst');
var ExecInst = require('../fields/ExecInst');
var MinQty = require('../fields/MinQty');
var MaxFloor = require('../fields/MaxFloor');
var ExDestination = require('../fields/ExDestination');
var ProcessCode = require('../fields/ProcessCode');
var PrevClosePx = require('../fields/PrevClosePx');
var Side = require('../fields/Side');
var SideValueInd = require('../fields/SideValueInd');
var LocateReqd = require('../fields/LocateReqd');
var TransactTime = require('../fields/TransactTime');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var Currency = require('../fields/Currency');
var ComplianceID = require('../fields/ComplianceID');
var SolicitedFlag = require('../fields/SolicitedFlag');
var IOIID = require('../fields/IOIID');
var QuoteID = require('../fields/QuoteID');
var TimeInForce = require('../fields/TimeInForce');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var GTBookingInst = require('../fields/GTBookingInst');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ForexReq = require('../fields/ForexReq');
var SettlCurrency = require('../fields/SettlCurrency');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Price2 = require('../fields/Price2');
var PositionEffect = require('../fields/PositionEffect');
var CoveredOrUncovered = require('../fields/CoveredOrUncovered');
var MaxShow = require('../fields/MaxShow');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var Designation = require('../fields/Designation');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');

function ListOrdGrp (listOrdGrp) {
  this.message = listOrdGrp;
}

/* group */

/* component */
ListOrdGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
ListOrdGrp.prototype.preAllocGrp = function () {
  return this.message.groups[PreAllocGrp.Tag]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

/* component */
ListOrdGrp.prototype.trdgSesGrp = function () {
  return this.message.groups[TrdgSesGrp.Tag]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

/* component */
ListOrdGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
ListOrdGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
ListOrdGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
ListOrdGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
ListOrdGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
ListOrdGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
ListOrdGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
ListOrdGrp.prototype.pegInstructions = function () {
  return this.message.groups[PegInstructions.Tag]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

/* component */
ListOrdGrp.prototype.discretionInstructions = function () {
  return this.message.groups[DiscretionInstructions.Tag]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

/* component */
ListOrdGrp.prototype.strategyParametersGrp = function () {
  return this.message.groups[StrategyParametersGrp.Tag]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

/* component */
ListOrdGrp.prototype.displayInstruction = function () {
  return this.message.groups[DisplayInstruction.Tag]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

/* component */
ListOrdGrp.prototype.triggeringInstruction = function () {
  return this.message.groups[TriggeringInstruction.Tag]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

/* field */
ListOrdGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
ListOrdGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
ListOrdGrp.prototype.listSeqNo = function () {
  return new ListSeqNo(this.message.tags[ListSeqNo.Tag]);
};

/* field */
ListOrdGrp.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[ClOrdLinkID.Tag]);
};

/* field */
ListOrdGrp.prototype.settlInstMode = function () {
  return new SettlInstMode(this.message.tags[SettlInstMode.Tag]);
};

/* field */
ListOrdGrp.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[TradeOriginationDate.Tag]);
};

/* field */
ListOrdGrp.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeDate.Tag]);
};

/* field */
ListOrdGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
ListOrdGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
ListOrdGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
ListOrdGrp.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[DayBookingInst.Tag]);
};

/* field */
ListOrdGrp.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[BookingUnit.Tag]);
};

/* field */
ListOrdGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
ListOrdGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
ListOrdGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
ListOrdGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
ListOrdGrp.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[CashMargin.Tag]);
};

/* field */
ListOrdGrp.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ClearingFeeIndicator.Tag]);
};

/* field */
ListOrdGrp.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[HandlInst.Tag]);
};

/* field */
ListOrdGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
ListOrdGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* field */
ListOrdGrp.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[MaxFloor.Tag]);
};

/* field */
ListOrdGrp.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[ExDestination.Tag]);
};

/* field */
ListOrdGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
ListOrdGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
ListOrdGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
ListOrdGrp.prototype.sideValueInd = function () {
  return new SideValueInd(this.message.tags[SideValueInd.Tag]);
};

/* field */
ListOrdGrp.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[LocateReqd.Tag]);
};

/* field */
ListOrdGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* field */
ListOrdGrp.prototype.qtyType = function () {
  return new QtyType(this.message.tags[QtyType.Tag]);
};

/* field */
ListOrdGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
ListOrdGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
ListOrdGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
ListOrdGrp.prototype.stopPx = function () {
  return new StopPx(this.message.tags[StopPx.Tag]);
};

/* field */
ListOrdGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
ListOrdGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
ListOrdGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
ListOrdGrp.prototype.ioiid = function () {
  return new IOIID(this.message.tags[IOIID.Tag]);
};

/* field */
ListOrdGrp.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteID.Tag]);
};

/* field */
ListOrdGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
ListOrdGrp.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[EffectiveTime.Tag]);
};

/* field */
ListOrdGrp.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[ExpireDate.Tag]);
};

/* field */
ListOrdGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
ListOrdGrp.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[GTBookingInst.Tag]);
};

/* field */
ListOrdGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
ListOrdGrp.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
ListOrdGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
ListOrdGrp.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[ForexReq.Tag]);
};

/* field */
ListOrdGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
ListOrdGrp.prototype.bookingType = function () {
  return new BookingType(this.message.tags[BookingType.Tag]);
};

/* field */
ListOrdGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
ListOrdGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
ListOrdGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
ListOrdGrp.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[SettlDate2.Tag]);
};

/* field */
ListOrdGrp.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[OrderQty2.Tag]);
};

/* field */
ListOrdGrp.prototype.price2 = function () {
  return new Price2(this.message.tags[Price2.Tag]);
};

/* field */
ListOrdGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
ListOrdGrp.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[CoveredOrUncovered.Tag]);
};

/* field */
ListOrdGrp.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[MaxShow.Tag]);
};

/* field */
ListOrdGrp.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[TargetStrategy.Tag]);
};

/* field */
ListOrdGrp.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[TargetStrategyParameters.Tag]);
};

/* field */
ListOrdGrp.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[ParticipationRate.Tag]);
};

/* field */
ListOrdGrp.prototype.designation = function () {
  return new Designation(this.message.tags[Designation.Tag]);
};

/* field */
ListOrdGrp.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[MatchIncrement.Tag]);
};

/* field */
ListOrdGrp.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[MaxPriceLevels.Tag]);
};

/* field */
ListOrdGrp.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[PriceProtectionScope.Tag]);
};

/* field */
ListOrdGrp.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[RefOrderID.Tag]);
};

/* field */
ListOrdGrp.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[RefOrderIDSource.Tag]);
};

/* field */
ListOrdGrp.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[PreTradeAnonymity.Tag]);
};

/* field */
ListOrdGrp.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[ExDestinationIDSource.Tag]);
};

/* end group */

ListOrdGrp.Tag = '73';

module.exports = ListOrdGrp;