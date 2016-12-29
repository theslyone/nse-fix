var Parties = require('../components/Parties');
var ContraGrp = require('../components/ContraGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var OrderQtyData = require('../components/OrderQtyData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var CommissionData = require('../components/CommissionData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var ContAmtGrp = require('../components/ContAmtGrp');
var InstrmtLegExecGrp = require('../components/InstrmtLegExecGrp');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var DisplayInstruction = require('../components/DisplayInstruction');
var PreAllocGrp = require('../components/PreAllocGrp');
var FillsGrp = require('../components/FillsGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var SecondaryExecID = require('../fields/SecondaryExecID');
var ClOrdID = require('../fields/ClOrdID');
var OrigClOrdID = require('../fields/OrigClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var QuoteRespID = require('../fields/QuoteRespID');
var OrdStatusReqID = require('../fields/OrdStatusReqID');
var MassStatusReqID = require('../fields/MassStatusReqID');
var TotNumReports = require('../fields/TotNumReports');
var LastRptRequested = require('../fields/LastRptRequested');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var ListID = require('../fields/ListID');
var CrossID = require('../fields/CrossID');
var OrigCrossID = require('../fields/OrigCrossID');
var CrossType = require('../fields/CrossType');
var ExecID = require('../fields/ExecID');
var ExecRefID = require('../fields/ExecRefID');
var ExecType = require('../fields/ExecType');
var OrdStatus = require('../fields/OrdStatus');
var WorkingIndicator = require('../fields/WorkingIndicator');
var OrdRejReason = require('../fields/OrdRejReason');
var ExecRestatementReason = require('../fields/ExecRestatementReason');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DayBookingInst = require('../fields/DayBookingInst');
var BookingUnit = require('../fields/BookingUnit');
var PreallocMethod = require('../fields/PreallocMethod');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var CashMargin = require('../fields/CashMargin');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var Side = require('../fields/Side');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var PeggedPrice = require('../fields/PeggedPrice');
var DiscretionPrice = require('../fields/DiscretionPrice');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var TargetStrategyPerformance = require('../fields/TargetStrategyPerformance');
var Currency = require('../fields/Currency');
var ComplianceID = require('../fields/ComplianceID');
var SolicitedFlag = require('../fields/SolicitedFlag');
var TimeInForce = require('../fields/TimeInForce');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var ExecInst = require('../fields/ExecInst');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var LastQty = require('../fields/LastQty');
var UnderlyingLastQty = require('../fields/UnderlyingLastQty');
var LastPx = require('../fields/LastPx');
var UnderlyingLastPx = require('../fields/UnderlyingLastPx');
var LastParPx = require('../fields/LastParPx');
var LastSpotRate = require('../fields/LastSpotRate');
var LastForwardPoints = require('../fields/LastForwardPoints');
var LastMkt = require('../fields/LastMkt');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TimeBracket = require('../fields/TimeBracket');
var LastCapacity = require('../fields/LastCapacity');
var LeavesQty = require('../fields/LeavesQty');
var CumQty = require('../fields/CumQty');
var AvgPx = require('../fields/AvgPx');
var DayOrderQty = require('../fields/DayOrderQty');
var DayCumQty = require('../fields/DayCumQty');
var DayAvgPx = require('../fields/DayAvgPx');
var GTBookingInst = require('../fields/GTBookingInst');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var ReportToExch = require('../fields/ReportToExch');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
var NumDaysInterest = require('../fields/NumDaysInterest');
var ExDate = require('../fields/ExDate');
var AccruedInterestRate = require('../fields/AccruedInterestRate');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var InterestAtMaturity = require('../fields/InterestAtMaturity');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var TradedFlatSwitch = require('../fields/TradedFlatSwitch');
var BasisFeatureDate = require('../fields/BasisFeatureDate');
var BasisFeaturePrice = require('../fields/BasisFeaturePrice');
var Concession = require('../fields/Concession');
var TotalTakedown = require('../fields/TotalTakedown');
var NetMoney = require('../fields/NetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var SettlCurrency = require('../fields/SettlCurrency');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var HandlInst = require('../fields/HandlInst');
var MinQty = require('../fields/MinQty');
var MaxFloor = require('../fields/MaxFloor');
var PositionEffect = require('../fields/PositionEffect');
var MaxShow = require('../fields/MaxShow');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var LastForwardPoints2 = require('../fields/LastForwardPoints2');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var Designation = require('../fields/Designation');
var TransBkdTime = require('../fields/TransBkdTime');
var ExecValuationPoint = require('../fields/ExecValuationPoint');
var ExecPriceType = require('../fields/ExecPriceType');
var ExecPriceAdjustment = require('../fields/ExecPriceAdjustment');
var PriorityIndicator = require('../fields/PriorityIndicator');
var PriceImprovement = require('../fields/PriceImprovement');
var LastLiquidityInd = require('../fields/LastLiquidityInd');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var HostCrossID = require('../fields/HostCrossID');
var ManualOrderIndicator = require('../fields/ManualOrderIndicator');
var CustDirectedOrder = require('../fields/CustDirectedOrder');
var ReceivedDeptID = require('../fields/ReceivedDeptID');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var AggressorIndicator = require('../fields/AggressorIndicator');
var CalculatedCcyLastQty = require('../fields/CalculatedCcyLastQty');
var LastSwapPoints = require('../fields/LastSwapPoints');
var MatchType = require('../fields/MatchType');
var OrderCategory = require('../fields/OrderCategory');
var LotType = require('../fields/LotType');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var PeggedRefPrice = require('../fields/PeggedRefPrice');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var Volatility = require('../fields/Volatility');
var TimeToExpiration = require('../fields/TimeToExpiration');
var RiskFreeRate = require('../fields/RiskFreeRate');
var PriceDelta = require('../fields/PriceDelta');
var TrdMatchID = require('../fields/TrdMatchID');
var AllocID = require('../fields/AllocID');
var TotNoFills = require('../fields/TotNoFills');
var LastFragment = require('../fields/LastFragment');
var DividendYield = require('../fields/DividendYield');

function ExecutionReport (executionReport) {
  this.message = executionReport;
}

ExecutionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

ExecutionReport.prototype.contraGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.ContraGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.ContraGrp]
    .map(function (contraGrp) {
      return new ContraGrp(contraGrp);
  });
};

ExecutionReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

ExecutionReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

ExecutionReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

ExecutionReport.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.Stipulations] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

ExecutionReport.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

ExecutionReport.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

ExecutionReport.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

ExecutionReport.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.CommissionData] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

ExecutionReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

ExecutionReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

ExecutionReport.prototype.contAmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.ContAmtGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.ContAmtGrp]
    .map(function (contAmtGrp) {
      return new ContAmtGrp(contAmtGrp);
  });
};

ExecutionReport.prototype.instrmtLegExecGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.InstrmtLegExecGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.InstrmtLegExecGrp]
    .map(function (instrmtLegExecGrp) {
      return new InstrmtLegExecGrp(instrmtLegExecGrp);
  });
};

ExecutionReport.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

ExecutionReport.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

ExecutionReport.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

ExecutionReport.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

ExecutionReport.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

ExecutionReport.prototype.preAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.PreAllocGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.PreAllocGrp]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

ExecutionReport.prototype.fillsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.FillsGrp] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.FillsGrp]
    .map(function (fillsGrp) {
      return new FillsGrp(fillsGrp);
  });
};

ExecutionReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[ExecutionReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

ExecutionReport.prototype.orderId = function () {
  return new OrderID(this.message.tags[ExecutionReport.Tags.OrderID]);
};

ExecutionReport.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[ExecutionReport.Tags.SecondaryOrderID]);
};

ExecutionReport.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[ExecutionReport.Tags.SecondaryClOrdID]);
};

ExecutionReport.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[ExecutionReport.Tags.SecondaryExecID]);
};

ExecutionReport.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ExecutionReport.Tags.ClOrdID]);
};

ExecutionReport.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[ExecutionReport.Tags.OrigClOrdID]);
};

ExecutionReport.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[ExecutionReport.Tags.ClOrdLinkID]);
};

ExecutionReport.prototype.quoteRespId = function () {
  return new QuoteRespID(this.message.tags[ExecutionReport.Tags.QuoteRespID]);
};

ExecutionReport.prototype.ordStatusReqId = function () {
  return new OrdStatusReqID(this.message.tags[ExecutionReport.Tags.OrdStatusReqID]);
};

ExecutionReport.prototype.massStatusReqId = function () {
  return new MassStatusReqID(this.message.tags[ExecutionReport.Tags.MassStatusReqID]);
};

ExecutionReport.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[ExecutionReport.Tags.TotNumReports]);
};

ExecutionReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[ExecutionReport.Tags.LastRptRequested]);
};

ExecutionReport.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[ExecutionReport.Tags.TradeOriginationDate]);
};

ExecutionReport.prototype.listId = function () {
  return new ListID(this.message.tags[ExecutionReport.Tags.ListID]);
};

ExecutionReport.prototype.crossId = function () {
  return new CrossID(this.message.tags[ExecutionReport.Tags.CrossID]);
};

ExecutionReport.prototype.origCrossId = function () {
  return new OrigCrossID(this.message.tags[ExecutionReport.Tags.OrigCrossID]);
};

ExecutionReport.prototype.crossType = function () {
  return new CrossType(this.message.tags[ExecutionReport.Tags.CrossType]);
};

ExecutionReport.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecutionReport.Tags.ExecID]);
};

ExecutionReport.prototype.execRefId = function () {
  return new ExecRefID(this.message.tags[ExecutionReport.Tags.ExecRefID]);
};

ExecutionReport.prototype.execType = function () {
  return new ExecType(this.message.tags[ExecutionReport.Tags.ExecType]);
};

ExecutionReport.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[ExecutionReport.Tags.OrdStatus]);
};

ExecutionReport.prototype.workingIndicator = function () {
  return new WorkingIndicator(this.message.tags[ExecutionReport.Tags.WorkingIndicator]);
};

ExecutionReport.prototype.ordRejReason = function () {
  return new OrdRejReason(this.message.tags[ExecutionReport.Tags.OrdRejReason]);
};

ExecutionReport.prototype.execRestatementReason = function () {
  return new ExecRestatementReason(this.message.tags[ExecutionReport.Tags.ExecRestatementReason]);
};

ExecutionReport.prototype.account = function () {
  return new Account(this.message.tags[ExecutionReport.Tags.Account]);
};

ExecutionReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[ExecutionReport.Tags.AcctIDSource]);
};

ExecutionReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[ExecutionReport.Tags.AccountType]);
};

ExecutionReport.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[ExecutionReport.Tags.DayBookingInst]);
};

ExecutionReport.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[ExecutionReport.Tags.BookingUnit]);
};

ExecutionReport.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[ExecutionReport.Tags.PreallocMethod]);
};

ExecutionReport.prototype.settlType = function () {
  return new SettlType(this.message.tags[ExecutionReport.Tags.SettlType]);
};

ExecutionReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[ExecutionReport.Tags.SettlDate]);
};

ExecutionReport.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[ExecutionReport.Tags.CashMargin]);
};

ExecutionReport.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ExecutionReport.Tags.ClearingFeeIndicator]);
};

ExecutionReport.prototype.side = function () {
  return new Side(this.message.tags[ExecutionReport.Tags.Side]);
};

ExecutionReport.prototype.qtyType = function () {
  return new QtyType(this.message.tags[ExecutionReport.Tags.QtyType]);
};

ExecutionReport.prototype.ordType = function () {
  return new OrdType(this.message.tags[ExecutionReport.Tags.OrdType]);
};

ExecutionReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[ExecutionReport.Tags.PriceType]);
};

ExecutionReport.prototype.price = function () {
  return new Price(this.message.tags[ExecutionReport.Tags.Price]);
};

ExecutionReport.prototype.stopPx = function () {
  return new StopPx(this.message.tags[ExecutionReport.Tags.StopPx]);
};

ExecutionReport.prototype.peggedPrice = function () {
  return new PeggedPrice(this.message.tags[ExecutionReport.Tags.PeggedPrice]);
};

ExecutionReport.prototype.discretionPrice = function () {
  return new DiscretionPrice(this.message.tags[ExecutionReport.Tags.DiscretionPrice]);
};

ExecutionReport.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[ExecutionReport.Tags.TargetStrategy]);
};

ExecutionReport.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[ExecutionReport.Tags.TargetStrategyParameters]);
};

ExecutionReport.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[ExecutionReport.Tags.ParticipationRate]);
};

ExecutionReport.prototype.targetStrategyPerformance = function () {
  return new TargetStrategyPerformance(this.message.tags[ExecutionReport.Tags.TargetStrategyPerformance]);
};

ExecutionReport.prototype.currency = function () {
  return new Currency(this.message.tags[ExecutionReport.Tags.Currency]);
};

ExecutionReport.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ExecutionReport.Tags.ComplianceID]);
};

ExecutionReport.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[ExecutionReport.Tags.SolicitedFlag]);
};

ExecutionReport.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[ExecutionReport.Tags.TimeInForce]);
};

ExecutionReport.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[ExecutionReport.Tags.EffectiveTime]);
};

ExecutionReport.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[ExecutionReport.Tags.ExpireDate]);
};

ExecutionReport.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExecutionReport.Tags.ExpireTime]);
};

ExecutionReport.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecutionReport.Tags.ExecInst]);
};

ExecutionReport.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[ExecutionReport.Tags.OrderCapacity]);
};

ExecutionReport.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[ExecutionReport.Tags.OrderRestrictions]);
};

ExecutionReport.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[ExecutionReport.Tags.CustOrderCapacity]);
};

ExecutionReport.prototype.lastQty = function () {
  return new LastQty(this.message.tags[ExecutionReport.Tags.LastQty]);
};

ExecutionReport.prototype.underlyingLastQty = function () {
  return new UnderlyingLastQty(this.message.tags[ExecutionReport.Tags.UnderlyingLastQty]);
};

ExecutionReport.prototype.lastPx = function () {
  return new LastPx(this.message.tags[ExecutionReport.Tags.LastPx]);
};

ExecutionReport.prototype.underlyingLastPx = function () {
  return new UnderlyingLastPx(this.message.tags[ExecutionReport.Tags.UnderlyingLastPx]);
};

ExecutionReport.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[ExecutionReport.Tags.LastParPx]);
};

ExecutionReport.prototype.lastSpotRate = function () {
  return new LastSpotRate(this.message.tags[ExecutionReport.Tags.LastSpotRate]);
};

ExecutionReport.prototype.lastForwardPoints = function () {
  return new LastForwardPoints(this.message.tags[ExecutionReport.Tags.LastForwardPoints]);
};

ExecutionReport.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[ExecutionReport.Tags.LastMkt]);
};

ExecutionReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[ExecutionReport.Tags.TradingSessionID]);
};

ExecutionReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[ExecutionReport.Tags.TradingSessionSubID]);
};

ExecutionReport.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[ExecutionReport.Tags.TimeBracket]);
};

ExecutionReport.prototype.lastCapacity = function () {
  return new LastCapacity(this.message.tags[ExecutionReport.Tags.LastCapacity]);
};

ExecutionReport.prototype.leavesQty = function () {
  return new LeavesQty(this.message.tags[ExecutionReport.Tags.LeavesQty]);
};

ExecutionReport.prototype.cumQty = function () {
  return new CumQty(this.message.tags[ExecutionReport.Tags.CumQty]);
};

ExecutionReport.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[ExecutionReport.Tags.AvgPx]);
};

ExecutionReport.prototype.dayOrderQty = function () {
  return new DayOrderQty(this.message.tags[ExecutionReport.Tags.DayOrderQty]);
};

ExecutionReport.prototype.dayCumQty = function () {
  return new DayCumQty(this.message.tags[ExecutionReport.Tags.DayCumQty]);
};

ExecutionReport.prototype.dayAvgPx = function () {
  return new DayAvgPx(this.message.tags[ExecutionReport.Tags.DayAvgPx]);
};

ExecutionReport.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[ExecutionReport.Tags.GTBookingInst]);
};

ExecutionReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[ExecutionReport.Tags.TradeDate]);
};

ExecutionReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ExecutionReport.Tags.TransactTime]);
};

ExecutionReport.prototype.reportToExch = function () {
  return new ReportToExch(this.message.tags[ExecutionReport.Tags.ReportToExch]);
};

ExecutionReport.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[ExecutionReport.Tags.GrossTradeAmt]);
};

ExecutionReport.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[ExecutionReport.Tags.NumDaysInterest]);
};

ExecutionReport.prototype.exDate = function () {
  return new ExDate(this.message.tags[ExecutionReport.Tags.ExDate]);
};

ExecutionReport.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[ExecutionReport.Tags.AccruedInterestRate]);
};

ExecutionReport.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[ExecutionReport.Tags.AccruedInterestAmt]);
};

ExecutionReport.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[ExecutionReport.Tags.InterestAtMaturity]);
};

ExecutionReport.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[ExecutionReport.Tags.EndAccruedInterestAmt]);
};

ExecutionReport.prototype.startCash = function () {
  return new StartCash(this.message.tags[ExecutionReport.Tags.StartCash]);
};

ExecutionReport.prototype.endCash = function () {
  return new EndCash(this.message.tags[ExecutionReport.Tags.EndCash]);
};

ExecutionReport.prototype.tradedFlatSwitch = function () {
  return new TradedFlatSwitch(this.message.tags[ExecutionReport.Tags.TradedFlatSwitch]);
};

ExecutionReport.prototype.basisFeatureDate = function () {
  return new BasisFeatureDate(this.message.tags[ExecutionReport.Tags.BasisFeatureDate]);
};

ExecutionReport.prototype.basisFeaturePrice = function () {
  return new BasisFeaturePrice(this.message.tags[ExecutionReport.Tags.BasisFeaturePrice]);
};

ExecutionReport.prototype.concession = function () {
  return new Concession(this.message.tags[ExecutionReport.Tags.Concession]);
};

ExecutionReport.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[ExecutionReport.Tags.TotalTakedown]);
};

ExecutionReport.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[ExecutionReport.Tags.NetMoney]);
};

ExecutionReport.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[ExecutionReport.Tags.SettlCurrAmt]);
};

ExecutionReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[ExecutionReport.Tags.SettlCurrency]);
};

ExecutionReport.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[ExecutionReport.Tags.SettlCurrFxRate]);
};

ExecutionReport.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[ExecutionReport.Tags.SettlCurrFxRateCalc]);
};

ExecutionReport.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[ExecutionReport.Tags.HandlInst]);
};

ExecutionReport.prototype.minQty = function () {
  return new MinQty(this.message.tags[ExecutionReport.Tags.MinQty]);
};

ExecutionReport.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[ExecutionReport.Tags.MaxFloor]);
};

ExecutionReport.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[ExecutionReport.Tags.PositionEffect]);
};

ExecutionReport.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[ExecutionReport.Tags.MaxShow]);
};

ExecutionReport.prototype.bookingType = function () {
  return new BookingType(this.message.tags[ExecutionReport.Tags.BookingType]);
};

ExecutionReport.prototype.text = function () {
  return new Text(this.message.tags[ExecutionReport.Tags.Text]);
};

ExecutionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ExecutionReport.Tags.EncodedTextLen]);
};

ExecutionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ExecutionReport.Tags.EncodedText]);
};

ExecutionReport.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[ExecutionReport.Tags.SettlDate2]);
};

ExecutionReport.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[ExecutionReport.Tags.OrderQty2]);
};

ExecutionReport.prototype.lastForwardPoints2 = function () {
  return new LastForwardPoints2(this.message.tags[ExecutionReport.Tags.LastForwardPoints2]);
};

ExecutionReport.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[ExecutionReport.Tags.MultiLegReportingType]);
};

ExecutionReport.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[ExecutionReport.Tags.CancellationRights]);
};

ExecutionReport.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[ExecutionReport.Tags.MoneyLaunderingStatus]);
};

ExecutionReport.prototype.registId = function () {
  return new RegistID(this.message.tags[ExecutionReport.Tags.RegistID]);
};

ExecutionReport.prototype.designation = function () {
  return new Designation(this.message.tags[ExecutionReport.Tags.Designation]);
};

ExecutionReport.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[ExecutionReport.Tags.TransBkdTime]);
};

ExecutionReport.prototype.execValuationPoint = function () {
  return new ExecValuationPoint(this.message.tags[ExecutionReport.Tags.ExecValuationPoint]);
};

ExecutionReport.prototype.execPriceType = function () {
  return new ExecPriceType(this.message.tags[ExecutionReport.Tags.ExecPriceType]);
};

ExecutionReport.prototype.execPriceAdjustment = function () {
  return new ExecPriceAdjustment(this.message.tags[ExecutionReport.Tags.ExecPriceAdjustment]);
};

ExecutionReport.prototype.priorityIndicator = function () {
  return new PriorityIndicator(this.message.tags[ExecutionReport.Tags.PriorityIndicator]);
};

ExecutionReport.prototype.priceImprovement = function () {
  return new PriceImprovement(this.message.tags[ExecutionReport.Tags.PriceImprovement]);
};

ExecutionReport.prototype.lastLiquidityInd = function () {
  return new LastLiquidityInd(this.message.tags[ExecutionReport.Tags.LastLiquidityInd]);
};

ExecutionReport.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[ExecutionReport.Tags.CopyMsgIndicator]);
};

ExecutionReport.prototype.hostCrossId = function () {
  return new HostCrossID(this.message.tags[ExecutionReport.Tags.HostCrossID]);
};

ExecutionReport.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[ExecutionReport.Tags.ManualOrderIndicator]);
};

ExecutionReport.prototype.custDirectedOrder = function () {
  return new CustDirectedOrder(this.message.tags[ExecutionReport.Tags.CustDirectedOrder]);
};

ExecutionReport.prototype.receivedDeptId = function () {
  return new ReceivedDeptID(this.message.tags[ExecutionReport.Tags.ReceivedDeptID]);
};

ExecutionReport.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[ExecutionReport.Tags.CustOrderHandlingInst]);
};

ExecutionReport.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[ExecutionReport.Tags.OrderHandlingInstSource]);
};

ExecutionReport.prototype.aggressorIndicator = function () {
  return new AggressorIndicator(this.message.tags[ExecutionReport.Tags.AggressorIndicator]);
};

ExecutionReport.prototype.calculatedCcyLastQty = function () {
  return new CalculatedCcyLastQty(this.message.tags[ExecutionReport.Tags.CalculatedCcyLastQty]);
};

ExecutionReport.prototype.lastSwapPoints = function () {
  return new LastSwapPoints(this.message.tags[ExecutionReport.Tags.LastSwapPoints]);
};

ExecutionReport.prototype.matchType = function () {
  return new MatchType(this.message.tags[ExecutionReport.Tags.MatchType]);
};

ExecutionReport.prototype.orderCategory = function () {
  return new OrderCategory(this.message.tags[ExecutionReport.Tags.OrderCategory]);
};

ExecutionReport.prototype.lotType = function () {
  return new LotType(this.message.tags[ExecutionReport.Tags.LotType]);
};

ExecutionReport.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[ExecutionReport.Tags.PriceProtectionScope]);
};

ExecutionReport.prototype.peggedRefPrice = function () {
  return new PeggedRefPrice(this.message.tags[ExecutionReport.Tags.PeggedRefPrice]);
};

ExecutionReport.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[ExecutionReport.Tags.PreTradeAnonymity]);
};

ExecutionReport.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[ExecutionReport.Tags.MatchIncrement]);
};

ExecutionReport.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[ExecutionReport.Tags.MaxPriceLevels]);
};

ExecutionReport.prototype.volatility = function () {
  return new Volatility(this.message.tags[ExecutionReport.Tags.Volatility]);
};

ExecutionReport.prototype.timeToExpiration = function () {
  return new TimeToExpiration(this.message.tags[ExecutionReport.Tags.TimeToExpiration]);
};

ExecutionReport.prototype.riskFreeRate = function () {
  return new RiskFreeRate(this.message.tags[ExecutionReport.Tags.RiskFreeRate]);
};

ExecutionReport.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[ExecutionReport.Tags.PriceDelta]);
};

ExecutionReport.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[ExecutionReport.Tags.TrdMatchID]);
};

ExecutionReport.prototype.allocId = function () {
  return new AllocID(this.message.tags[ExecutionReport.Tags.AllocID]);
};

ExecutionReport.prototype.totNoFills = function () {
  return new TotNoFills(this.message.tags[ExecutionReport.Tags.TotNoFills]);
};

ExecutionReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[ExecutionReport.Tags.LastFragment]);
};

ExecutionReport.prototype.dividendYield = function () {
  return new DividendYield(this.message.tags[ExecutionReport.Tags.DividendYield]);
};

ExecutionReport.Tags = {
  Parties: '453',
  ContraGrp: '382',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  Stipulations: '232',
  OrderQtyData: '38',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  CommissionData: '12',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  ContAmtGrp: '518',
  InstrmtLegExecGrp: '555',
  MiscFeesGrp: '136',
  StrategyParametersGrp: '957',
  TrdRegTimestamps: '768',
  TriggeringInstruction: '1100',
  DisplayInstruction: '1082',
  PreAllocGrp: '78',
  FillsGrp: '1362',
  ApplicationSequenceControl: '1180',
  OrderID: '37',
  SecondaryOrderID: '198',
  SecondaryClOrdID: '526',
  SecondaryExecID: '527',
  ClOrdID: '11',
  OrigClOrdID: '41',
  ClOrdLinkID: '583',
  QuoteRespID: '693',
  OrdStatusReqID: '790',
  MassStatusReqID: '584',
  TotNumReports: '911',
  LastRptRequested: '912',
  TradeOriginationDate: '229',
  ListID: '66',
  CrossID: '548',
  OrigCrossID: '551',
  CrossType: '549',
  ExecID: '17',
  ExecRefID: '19',
  ExecType: '150',
  OrdStatus: '39',
  WorkingIndicator: '636',
  OrdRejReason: '103',
  ExecRestatementReason: '378',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  DayBookingInst: '589',
  BookingUnit: '590',
  PreallocMethod: '591',
  SettlType: '63',
  SettlDate: '64',
  CashMargin: '544',
  ClearingFeeIndicator: '635',
  Side: '54',
  QtyType: '854',
  OrdType: '40',
  PriceType: '423',
  Price: '44',
  StopPx: '99',
  PeggedPrice: '839',
  DiscretionPrice: '845',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  ParticipationRate: '849',
  TargetStrategyPerformance: '850',
  Currency: '15',
  ComplianceID: '376',
  SolicitedFlag: '377',
  TimeInForce: '59',
  EffectiveTime: '168',
  ExpireDate: '432',
  ExpireTime: '126',
  ExecInst: '18',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  CustOrderCapacity: '582',
  LastQty: '32',
  UnderlyingLastQty: '652',
  LastPx: '31',
  UnderlyingLastPx: '651',
  LastParPx: '669',
  LastSpotRate: '194',
  LastForwardPoints: '195',
  LastMkt: '30',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  TimeBracket: '943',
  LastCapacity: '29',
  LeavesQty: '151',
  CumQty: '14',
  AvgPx: '6',
  DayOrderQty: '424',
  DayCumQty: '425',
  DayAvgPx: '426',
  GTBookingInst: '427',
  TradeDate: '75',
  TransactTime: '60',
  ReportToExch: '113',
  GrossTradeAmt: '381',
  NumDaysInterest: '157',
  ExDate: '230',
  AccruedInterestRate: '158',
  AccruedInterestAmt: '159',
  InterestAtMaturity: '738',
  EndAccruedInterestAmt: '920',
  StartCash: '921',
  EndCash: '922',
  TradedFlatSwitch: '258',
  BasisFeatureDate: '259',
  BasisFeaturePrice: '260',
  Concession: '238',
  TotalTakedown: '237',
  NetMoney: '118',
  SettlCurrAmt: '119',
  SettlCurrency: '120',
  SettlCurrFxRate: '155',
  SettlCurrFxRateCalc: '156',
  HandlInst: '21',
  MinQty: '110',
  MaxFloor: '111',
  PositionEffect: '77',
  MaxShow: '210',
  BookingType: '775',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SettlDate2: '193',
  OrderQty2: '192',
  LastForwardPoints2: '641',
  MultiLegReportingType: '442',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  Designation: '494',
  TransBkdTime: '483',
  ExecValuationPoint: '515',
  ExecPriceType: '484',
  ExecPriceAdjustment: '485',
  PriorityIndicator: '638',
  PriceImprovement: '639',
  LastLiquidityInd: '851',
  CopyMsgIndicator: '797',
  HostCrossID: '961',
  ManualOrderIndicator: '1028',
  CustDirectedOrder: '1029',
  ReceivedDeptID: '1030',
  CustOrderHandlingInst: '1031',
  OrderHandlingInstSource: '1032',
  AggressorIndicator: '1057',
  CalculatedCcyLastQty: '1056',
  LastSwapPoints: '1071',
  MatchType: '574',
  OrderCategory: '1115',
  LotType: '1093',
  PriceProtectionScope: '1092',
  PeggedRefPrice: '1095',
  PreTradeAnonymity: '1091',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  Volatility: '1188',
  TimeToExpiration: '1189',
  RiskFreeRate: '1190',
  PriceDelta: '811',
  TrdMatchID: '880',
  AllocID: '70',
  TotNoFills: '1361',
  LastFragment: '893',
  DividendYield: '1380',
};

ExecutionReport.msgType = '8';

module.exports = ExecutionReport;