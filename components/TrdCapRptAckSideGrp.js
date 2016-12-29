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
var SideMultiLegReportingType = require('../fields/SideMultiLegReportingType');
var ExchangeRule = require('../fields/ExchangeRule');
var TradeAllocIndicator = require('../fields/TradeAllocIndicator');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var LotType = require('../fields/LotType');
var SideGrossTradeAmt = require('../fields/SideGrossTradeAmt');
var AggressorIndicator = require('../fields/AggressorIndicator');
var SideQty = require('../fields/SideQty');
var SideTradeReportID = require('../fields/SideTradeReportID');
var SideFillStationCd = require('../fields/SideFillStationCd');
var SideReasonCd = require('../fields/SideReasonCd');
var RptSeq = require('../fields/RptSeq');
var SideTrdSubTyp = require('../fields/SideTrdSubTyp');
var NetGrossInd = require('../fields/NetGrossInd');
var SideCurrency = require('../fields/SideCurrency');
var SideSettlCurrency = require('../fields/SideSettlCurrency');

function TrdCapRptAckSideGrp (trdCapRptAckSideGrp) {
  this.message = trdCapRptAckSideGrp;
}

/* group */

/* component */
TrdCapRptAckSideGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.clrInstGrp = function () {
  return this.message.groups[ClrInstGrp.Tag]
    .map(function (clrInstGrp) {
      return new ClrInstGrp(clrInstGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.contAmtGrp = function () {
  return this.message.groups[ContAmtGrp.Tag]
    .map(function (contAmtGrp) {
      return new ContAmtGrp(contAmtGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.miscFeesGrp = function () {
  return this.message.groups[MiscFeesGrp.Tag]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.trdAllocGrp = function () {
  return this.message.groups[TrdAllocGrp.Tag]
    .map(function (trdAllocGrp) {
      return new TrdAllocGrp(trdAllocGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.sideTrdRegTs = function () {
  return this.message.groups[SideTrdRegTS.Tag]
    .map(function (sideTrdRegTs) {
      return new SideTrdRegTS(sideTrdRegTs);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.settlDetails = function () {
  return this.message.groups[SettlDetails.Tag]
    .map(function (settlDetails) {
      return new SettlDetails(settlDetails);
  });
};

/* field */
TrdCapRptAckSideGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.oddLot = function () {
  return new OddLot(this.message.tags[OddLot.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeInputSource.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[TradeInputDevice.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderInputDevice = function () {
  return new OrderInputDevice(this.message.tags[OrderInputDevice.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[TransBkdTime.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[TimeBracket.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[NumDaysInterest.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.exDate = function () {
  return new ExDate(this.message.tags[ExDate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AccruedInterestRate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[InterestAtMaturity.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[EndAccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.startCash = function () {
  return new StartCash(this.message.tags[StartCash.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.endCash = function () {
  return new EndCash(this.message.tags[EndCash.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.concession = function () {
  return new Concession(this.message.tags[Concession.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[TotalTakedown.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[NetMoney.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[SettlCurrFxRateCalc.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideMultiLegReportingType = function () {
  return new SideMultiLegReportingType(this.message.tags[SideMultiLegReportingType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.exchangeRule = function () {
  return new ExchangeRule(this.message.tags[ExchangeRule.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeAllocIndicator = function () {
  return new TradeAllocIndicator(this.message.tags[TradeAllocIndicator.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideGrossTradeAmt = function () {
  return new SideGrossTradeAmt(this.message.tags[SideGrossTradeAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.aggressorIndicator = function () {
  return new AggressorIndicator(this.message.tags[AggressorIndicator.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideQty = function () {
  return new SideQty(this.message.tags[SideQty.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideTradeReportId = function () {
  return new SideTradeReportID(this.message.tags[SideTradeReportID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideFillStationCd = function () {
  return new SideFillStationCd(this.message.tags[SideFillStationCd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideReasonCd = function () {
  return new SideReasonCd(this.message.tags[SideReasonCd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[RptSeq.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideTrdSubTyp = function () {
  return new SideTrdSubTyp(this.message.tags[SideTrdSubTyp.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideCurrency = function () {
  return new SideCurrency(this.message.tags[SideCurrency.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideSettlCurrency = function () {
  return new SideSettlCurrency(this.message.tags[SideSettlCurrency.Tag]);
};

/* end group */

TrdCapRptAckSideGrp.Tag = '552';

module.exports = TrdCapRptAckSideGrp;