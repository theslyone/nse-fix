var NoSides = require('../fields/NoSides');
var Parties = require('../components/Parties');
var ClrInstGrp = require('../components/ClrInstGrp');
var CommissionData = require('../components/CommissionData');
var ContAmtGrp = require('../components/ContAmtGrp');
var Stipulations = require('../components/Stipulations');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var TrdAllocGrp = require('../components/TrdAllocGrp');
var SideTrdRegTS = require('../components/SideTrdRegTS');
var SettlDetails = require('../components/SettlDetails');
var Side = require('../fields/Side');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ListID = require('../fields/ListID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var ProcessCode = require('../fields/ProcessCode');
var OddLot = require('../fields/OddLot');
var TradeInputSource = require('../fields/TradeInputSource');
var TradeInputDevice = require('../fields/TradeInputDevice');
var OrderInputDevice = require('../fields/OrderInputDevice');
var ComplianceID = require('../fields/ComplianceID');
var SolicitedFlag = require('../fields/SolicitedFlag');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var OrdType = require('../fields/OrdType');
var ExecInst = require('../fields/ExecInst');
var TransBkdTime = require('../fields/TransBkdTime');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TimeBracket = require('../fields/TimeBracket');
var NumDaysInterest = require('../fields/NumDaysInterest');
var ExDate = require('../fields/ExDate');
var AccruedInterestRate = require('../fields/AccruedInterestRate');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var InterestAtMaturity = require('../fields/InterestAtMaturity');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var Concession = require('../fields/Concession');
var TotalTakedown = require('../fields/TotalTakedown');
var NetMoney = require('../fields/NetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var PositionEffect = require('../fields/PositionEffect');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SideMultiLegReportingType = require('../fields/SideMultiLegReportingType');
var ExchangeRule = require('../fields/ExchangeRule');
var TradeAllocIndicator = require('../fields/TradeAllocIndicator');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var SideQty = require('../fields/SideQty');
var SideTradeReportID = require('../fields/SideTradeReportID');
var SideFillStationCd = require('../fields/SideFillStationCd');
var SideReasonCd = require('../fields/SideReasonCd');
var RptSeq = require('../fields/RptSeq');
var SideTrdSubTyp = require('../fields/SideTrdSubTyp');
var ExecRefID = require('../fields/ExecRefID');
var LotType = require('../fields/LotType');
var SideGrossTradeAmt = require('../fields/SideGrossTradeAmt');
var AggressorIndicator = require('../fields/AggressorIndicator');
var ExchangeSpecialInstructions = require('../fields/ExchangeSpecialInstructions');
var NetGrossInd = require('../fields/NetGrossInd');
var SideCurrency = require('../fields/SideCurrency');
var SideSettlCurrency = require('../fields/SideSettlCurrency');

function TrdCapRptSideGrp (trdCapRptSideGrp) {
  this.message = trdCapRptSideGrp;
}

/* group */

/* component */
TrdCapRptSideGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
TrdCapRptSideGrp.prototype.clrInstGrp = function () {
  return this.message.groups[ClrInstGrp.Tag]
    .map(function (clrInstGrp) {
      return new ClrInstGrp(clrInstGrp);
  });
};

/* component */
TrdCapRptSideGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
TrdCapRptSideGrp.prototype.contAmtGrp = function () {
  return this.message.groups[ContAmtGrp.Tag]
    .map(function (contAmtGrp) {
      return new ContAmtGrp(contAmtGrp);
  });
};

/* component */
TrdCapRptSideGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
TrdCapRptSideGrp.prototype.miscFeesGrp = function () {
  return this.message.groups[MiscFeesGrp.Tag]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

/* component */
TrdCapRptSideGrp.prototype.trdAllocGrp = function () {
  return this.message.groups[TrdAllocGrp.Tag]
    .map(function (trdAllocGrp) {
      return new TrdAllocGrp(trdAllocGrp);
  });
};

/* component */
TrdCapRptSideGrp.prototype.sideTrdRegTs = function () {
  return this.message.groups[SideTrdRegTS.Tag]
    .map(function (sideTrdRegTs) {
      return new SideTrdRegTS(sideTrdRegTs);
  });
};

/* component */
TrdCapRptSideGrp.prototype.settlDetails = function () {
  return this.message.groups[SettlDetails.Tag]
    .map(function (settlDetails) {
      return new SettlDetails(settlDetails);
  });
};

/* field */
TrdCapRptSideGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.oddLot = function () {
  return new OddLot(this.message.tags[OddLot.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeInputSource.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[TradeInputDevice.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.orderInputDevice = function () {
  return new OrderInputDevice(this.message.tags[OrderInputDevice.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[TransBkdTime.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[TimeBracket.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[NumDaysInterest.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.exDate = function () {
  return new ExDate(this.message.tags[ExDate.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AccruedInterestRate.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[InterestAtMaturity.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[EndAccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.startCash = function () {
  return new StartCash(this.message.tags[StartCash.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.endCash = function () {
  return new EndCash(this.message.tags[EndCash.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.concession = function () {
  return new Concession(this.message.tags[Concession.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[TotalTakedown.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[NetMoney.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[SettlCurrFxRateCalc.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideMultiLegReportingType = function () {
  return new SideMultiLegReportingType(this.message.tags[SideMultiLegReportingType.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.exchangeRule = function () {
  return new ExchangeRule(this.message.tags[ExchangeRule.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.tradeAllocIndicator = function () {
  return new TradeAllocIndicator(this.message.tags[TradeAllocIndicator.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideQty = function () {
  return new SideQty(this.message.tags[SideQty.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideTradeReportId = function () {
  return new SideTradeReportID(this.message.tags[SideTradeReportID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideFillStationCd = function () {
  return new SideFillStationCd(this.message.tags[SideFillStationCd.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideReasonCd = function () {
  return new SideReasonCd(this.message.tags[SideReasonCd.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[RptSeq.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideTrdSubTyp = function () {
  return new SideTrdSubTyp(this.message.tags[SideTrdSubTyp.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.execRefId = function () {
  return new ExecRefID(this.message.tags[ExecRefID.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideGrossTradeAmt = function () {
  return new SideGrossTradeAmt(this.message.tags[SideGrossTradeAmt.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.aggressorIndicator = function () {
  return new AggressorIndicator(this.message.tags[AggressorIndicator.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.exchangeSpecialInstructions = function () {
  return new ExchangeSpecialInstructions(this.message.tags[ExchangeSpecialInstructions.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideCurrency = function () {
  return new SideCurrency(this.message.tags[SideCurrency.Tag]);
};

/* field */
TrdCapRptSideGrp.prototype.sideSettlCurrency = function () {
  return new SideSettlCurrency(this.message.tags[SideSettlCurrency.Tag]);
};

/* end group */

TrdCapRptSideGrp.Tag = '552';

module.exports = TrdCapRptSideGrp;