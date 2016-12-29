var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var OrderQtyData = require('../components/OrderQtyData');
var YieldData = require('../components/YieldData');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var PositionAmountData = require('../components/PositionAmountData');
var TrdInstrmtLegGrp = require('../components/TrdInstrmtLegGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var TrdCapRptSideGrp = require('../components/TrdCapRptSideGrp');
var RootParties = require('../components/RootParties');
var TrdRepIndicatorsGrp = require('../components/TrdRepIndicatorsGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TradeReportID = require('../fields/TradeReportID');
var TradeReportTransType = require('../fields/TradeReportTransType');
var TradeReportType = require('../fields/TradeReportType');
var TradeRequestID = require('../fields/TradeRequestID');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var SecondaryTrdType = require('../fields/SecondaryTrdType');
var TransferReason = require('../fields/TransferReason');
var ExecType = require('../fields/ExecType');
var TotNumTradeReports = require('../fields/TotNumTradeReports');
var LastRptRequested = require('../fields/LastRptRequested');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradeReportRefID = require('../fields/TradeReportRefID');
var SecondaryTradeReportRefID = require('../fields/SecondaryTradeReportRefID');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');
var TradeLinkID = require('../fields/TradeLinkID');
var TrdMatchID = require('../fields/TrdMatchID');
var ExecID = require('../fields/ExecID');
var OrdStatus = require('../fields/OrdStatus');
var SecondaryExecID = require('../fields/SecondaryExecID');
var ExecRestatementReason = require('../fields/ExecRestatementReason');
var PreviouslyReported = require('../fields/PreviouslyReported');
var PriceType = require('../fields/PriceType');
var QtyType = require('../fields/QtyType');
var UnderlyingTradingSessionID = require('../fields/UnderlyingTradingSessionID');
var UnderlyingTradingSessionSubID = require('../fields/UnderlyingTradingSessionSubID');
var LastQty = require('../fields/LastQty');
var LastPx = require('../fields/LastPx');
var LastParPx = require('../fields/LastParPx');
var LastSpotRate = require('../fields/LastSpotRate');
var LastForwardPoints = require('../fields/LastForwardPoints');
var LastMkt = require('../fields/LastMkt');
var TradeDate = require('../fields/TradeDate');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var AvgPx = require('../fields/AvgPx');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var TradeLegRefID = require('../fields/TradeLegRefID');
var TransactTime = require('../fields/TransactTime');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var MatchStatus = require('../fields/MatchStatus');
var MatchType = require('../fields/MatchType');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var PublishTrdIndicator = require('../fields/PublishTrdIndicator');
var ShortSaleReason = require('../fields/ShortSaleReason');
var TrdRptStatus = require('../fields/TrdRptStatus');
var AsOfIndicator = require('../fields/AsOfIndicator');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var TierCode = require('../fields/TierCode');
var MessageEventSource = require('../fields/MessageEventSource');
var LastUpdateTime = require('../fields/LastUpdateTime');
var RndPx = require('../fields/RndPx');
var TradeID = require('../fields/TradeID');
var SecondaryTradeID = require('../fields/SecondaryTradeID');
var FirmTradeID = require('../fields/FirmTradeID');
var SecondaryFirmTradeID = require('../fields/SecondaryFirmTradeID');
var CalculatedCcyLastQty = require('../fields/CalculatedCcyLastQty');
var LastSwapPoints = require('../fields/LastSwapPoints');
var UnderlyingSettlementDate = require('../fields/UnderlyingSettlementDate');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
var OrderCategory = require('../fields/OrderCategory');
var TradeHandlingInstr = require('../fields/TradeHandlingInstr');
var OrigTradeHandlingInstr = require('../fields/OrigTradeHandlingInstr');
var OrigTradeDate = require('../fields/OrigTradeDate');
var OrigTradeID = require('../fields/OrigTradeID');
var OrigSecondaryTradeID = require('../fields/OrigSecondaryTradeID');
var TZTransactTime = require('../fields/TZTransactTime');
var ReportedPxDiff = require('../fields/ReportedPxDiff');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var RejectText = require('../fields/RejectText');
var FeeMultiplier = require('../fields/FeeMultiplier');
var Volatility = require('../fields/Volatility');
var DividendYield = require('../fields/DividendYield');
var RiskFreeRate = require('../fields/RiskFreeRate');
var CurrencyRatio = require('../fields/CurrencyRatio');
var TradePublishIndicator = require('../fields/TradePublishIndicator');
var MarketSegmentID = require('../fields/MarketSegmentID');

function TradeCaptureReport (tradeCaptureReport) {
  this.message = tradeCaptureReport;
}

TradeCaptureReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

TradeCaptureReport.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

TradeCaptureReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

TradeCaptureReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

TradeCaptureReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

TradeCaptureReport.prototype.trdInstrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdInstrmtLegGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdInstrmtLegGrp]
    .map(function (trdInstrmtLegGrp) {
      return new TrdInstrmtLegGrp(trdInstrmtLegGrp);
  });
};

TradeCaptureReport.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

TradeCaptureReport.prototype.trdCapRptSideGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdCapRptSideGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdCapRptSideGrp]
    .map(function (trdCapRptSideGrp) {
      return new TrdCapRptSideGrp(trdCapRptSideGrp);
  });
};

TradeCaptureReport.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.RootParties] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

TradeCaptureReport.prototype.trdRepIndicatorsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdRepIndicatorsGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdRepIndicatorsGrp]
    .map(function (trdRepIndicatorsGrp) {
      return new TrdRepIndicatorsGrp(trdRepIndicatorsGrp);
  });
};

TradeCaptureReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradeCaptureReport.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeCaptureReport.Tags.TradeReportID]);
};

TradeCaptureReport.prototype.tradeReportTransType = function () {
  return new TradeReportTransType(this.message.tags[TradeCaptureReport.Tags.TradeReportTransType]);
};

TradeCaptureReport.prototype.tradeReportType = function () {
  return new TradeReportType(this.message.tags[TradeCaptureReport.Tags.TradeReportType]);
};

TradeCaptureReport.prototype.tradeRequestId = function () {
  return new TradeRequestID(this.message.tags[TradeCaptureReport.Tags.TradeRequestID]);
};

TradeCaptureReport.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeCaptureReport.Tags.TrdType]);
};

TradeCaptureReport.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeCaptureReport.Tags.TrdSubType]);
};

TradeCaptureReport.prototype.secondaryTrdType = function () {
  return new SecondaryTrdType(this.message.tags[TradeCaptureReport.Tags.SecondaryTrdType]);
};

TradeCaptureReport.prototype.transferReason = function () {
  return new TransferReason(this.message.tags[TradeCaptureReport.Tags.TransferReason]);
};

TradeCaptureReport.prototype.execType = function () {
  return new ExecType(this.message.tags[TradeCaptureReport.Tags.ExecType]);
};

TradeCaptureReport.prototype.totNumTradeReports = function () {
  return new TotNumTradeReports(this.message.tags[TradeCaptureReport.Tags.TotNumTradeReports]);
};

TradeCaptureReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[TradeCaptureReport.Tags.LastRptRequested]);
};

TradeCaptureReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[TradeCaptureReport.Tags.UnsolicitedIndicator]);
};

TradeCaptureReport.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReport.Tags.SubscriptionRequestType]);
};

TradeCaptureReport.prototype.tradeReportRefId = function () {
  return new TradeReportRefID(this.message.tags[TradeCaptureReport.Tags.TradeReportRefID]);
};

TradeCaptureReport.prototype.secondaryTradeReportRefId = function () {
  return new SecondaryTradeReportRefID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeReportRefID]);
};

TradeCaptureReport.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeReportID]);
};

TradeCaptureReport.prototype.tradeLinkId = function () {
  return new TradeLinkID(this.message.tags[TradeCaptureReport.Tags.TradeLinkID]);
};

TradeCaptureReport.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeCaptureReport.Tags.TrdMatchID]);
};

TradeCaptureReport.prototype.execId = function () {
  return new ExecID(this.message.tags[TradeCaptureReport.Tags.ExecID]);
};

TradeCaptureReport.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[TradeCaptureReport.Tags.OrdStatus]);
};

TradeCaptureReport.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[TradeCaptureReport.Tags.SecondaryExecID]);
};

TradeCaptureReport.prototype.execRestatementReason = function () {
  return new ExecRestatementReason(this.message.tags[TradeCaptureReport.Tags.ExecRestatementReason]);
};

TradeCaptureReport.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[TradeCaptureReport.Tags.PreviouslyReported]);
};

TradeCaptureReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[TradeCaptureReport.Tags.PriceType]);
};

TradeCaptureReport.prototype.qtyType = function () {
  return new QtyType(this.message.tags[TradeCaptureReport.Tags.QtyType]);
};

TradeCaptureReport.prototype.underlyingTradingSessionId = function () {
  return new UnderlyingTradingSessionID(this.message.tags[TradeCaptureReport.Tags.UnderlyingTradingSessionID]);
};

TradeCaptureReport.prototype.underlyingTradingSessionSubId = function () {
  return new UnderlyingTradingSessionSubID(this.message.tags[TradeCaptureReport.Tags.UnderlyingTradingSessionSubID]);
};

TradeCaptureReport.prototype.lastQty = function () {
  return new LastQty(this.message.tags[TradeCaptureReport.Tags.LastQty]);
};

TradeCaptureReport.prototype.lastPx = function () {
  return new LastPx(this.message.tags[TradeCaptureReport.Tags.LastPx]);
};

TradeCaptureReport.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[TradeCaptureReport.Tags.LastParPx]);
};

TradeCaptureReport.prototype.lastSpotRate = function () {
  return new LastSpotRate(this.message.tags[TradeCaptureReport.Tags.LastSpotRate]);
};

TradeCaptureReport.prototype.lastForwardPoints = function () {
  return new LastForwardPoints(this.message.tags[TradeCaptureReport.Tags.LastForwardPoints]);
};

TradeCaptureReport.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[TradeCaptureReport.Tags.LastMkt]);
};

TradeCaptureReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeCaptureReport.Tags.TradeDate]);
};

TradeCaptureReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[TradeCaptureReport.Tags.ClearingBusinessDate]);
};

TradeCaptureReport.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[TradeCaptureReport.Tags.AvgPx]);
};

TradeCaptureReport.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[TradeCaptureReport.Tags.AvgPxIndicator]);
};

TradeCaptureReport.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReport.Tags.MultiLegReportingType]);
};

TradeCaptureReport.prototype.tradeLegRefId = function () {
  return new TradeLegRefID(this.message.tags[TradeCaptureReport.Tags.TradeLegRefID]);
};

TradeCaptureReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradeCaptureReport.Tags.TransactTime]);
};

TradeCaptureReport.prototype.settlType = function () {
  return new SettlType(this.message.tags[TradeCaptureReport.Tags.SettlType]);
};

TradeCaptureReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[TradeCaptureReport.Tags.SettlDate]);
};

TradeCaptureReport.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[TradeCaptureReport.Tags.MatchStatus]);
};

TradeCaptureReport.prototype.matchType = function () {
  return new MatchType(this.message.tags[TradeCaptureReport.Tags.MatchType]);
};

TradeCaptureReport.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[TradeCaptureReport.Tags.CopyMsgIndicator]);
};

TradeCaptureReport.prototype.publishTrdIndicator = function () {
  return new PublishTrdIndicator(this.message.tags[TradeCaptureReport.Tags.PublishTrdIndicator]);
};

TradeCaptureReport.prototype.shortSaleReason = function () {
  return new ShortSaleReason(this.message.tags[TradeCaptureReport.Tags.ShortSaleReason]);
};

TradeCaptureReport.prototype.trdRptStatus = function () {
  return new TrdRptStatus(this.message.tags[TradeCaptureReport.Tags.TrdRptStatus]);
};

TradeCaptureReport.prototype.asOfIndicator = function () {
  return new AsOfIndicator(this.message.tags[TradeCaptureReport.Tags.AsOfIndicator]);
};

TradeCaptureReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[TradeCaptureReport.Tags.SettlSessID]);
};

TradeCaptureReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[TradeCaptureReport.Tags.SettlSessSubID]);
};

TradeCaptureReport.prototype.tierCode = function () {
  return new TierCode(this.message.tags[TradeCaptureReport.Tags.TierCode]);
};

TradeCaptureReport.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[TradeCaptureReport.Tags.MessageEventSource]);
};

TradeCaptureReport.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[TradeCaptureReport.Tags.LastUpdateTime]);
};

TradeCaptureReport.prototype.rndPx = function () {
  return new RndPx(this.message.tags[TradeCaptureReport.Tags.RndPx]);
};

TradeCaptureReport.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeCaptureReport.Tags.TradeID]);
};

TradeCaptureReport.prototype.secondaryTradeId = function () {
  return new SecondaryTradeID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeID]);
};

TradeCaptureReport.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[TradeCaptureReport.Tags.FirmTradeID]);
};

TradeCaptureReport.prototype.secondaryFirmTradeId = function () {
  return new SecondaryFirmTradeID(this.message.tags[TradeCaptureReport.Tags.SecondaryFirmTradeID]);
};

TradeCaptureReport.prototype.calculatedCcyLastQty = function () {
  return new CalculatedCcyLastQty(this.message.tags[TradeCaptureReport.Tags.CalculatedCcyLastQty]);
};

TradeCaptureReport.prototype.lastSwapPoints = function () {
  return new LastSwapPoints(this.message.tags[TradeCaptureReport.Tags.LastSwapPoints]);
};

TradeCaptureReport.prototype.underlyingSettlementDate = function () {
  return new UnderlyingSettlementDate(this.message.tags[TradeCaptureReport.Tags.UnderlyingSettlementDate]);
};

TradeCaptureReport.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[TradeCaptureReport.Tags.GrossTradeAmt]);
};

TradeCaptureReport.prototype.orderCategory = function () {
  return new OrderCategory(this.message.tags[TradeCaptureReport.Tags.OrderCategory]);
};

TradeCaptureReport.prototype.tradeHandlingInstr = function () {
  return new TradeHandlingInstr(this.message.tags[TradeCaptureReport.Tags.TradeHandlingInstr]);
};

TradeCaptureReport.prototype.origTradeHandlingInstr = function () {
  return new OrigTradeHandlingInstr(this.message.tags[TradeCaptureReport.Tags.OrigTradeHandlingInstr]);
};

TradeCaptureReport.prototype.origTradeDate = function () {
  return new OrigTradeDate(this.message.tags[TradeCaptureReport.Tags.OrigTradeDate]);
};

TradeCaptureReport.prototype.origTradeId = function () {
  return new OrigTradeID(this.message.tags[TradeCaptureReport.Tags.OrigTradeID]);
};

TradeCaptureReport.prototype.origSecondaryTradeId = function () {
  return new OrigSecondaryTradeID(this.message.tags[TradeCaptureReport.Tags.OrigSecondaryTradeID]);
};

TradeCaptureReport.prototype.tztransactTime = function () {
  return new TZTransactTime(this.message.tags[TradeCaptureReport.Tags.TZTransactTime]);
};

TradeCaptureReport.prototype.reportedPxDiff = function () {
  return new ReportedPxDiff(this.message.tags[TradeCaptureReport.Tags.ReportedPxDiff]);
};

TradeCaptureReport.prototype.currency = function () {
  return new Currency(this.message.tags[TradeCaptureReport.Tags.Currency]);
};

TradeCaptureReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[TradeCaptureReport.Tags.SettlCurrency]);
};

TradeCaptureReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[TradeCaptureReport.Tags.RejectText]);
};

TradeCaptureReport.prototype.feeMultiplier = function () {
  return new FeeMultiplier(this.message.tags[TradeCaptureReport.Tags.FeeMultiplier]);
};

TradeCaptureReport.prototype.volatility = function () {
  return new Volatility(this.message.tags[TradeCaptureReport.Tags.Volatility]);
};

TradeCaptureReport.prototype.dividendYield = function () {
  return new DividendYield(this.message.tags[TradeCaptureReport.Tags.DividendYield]);
};

TradeCaptureReport.prototype.riskFreeRate = function () {
  return new RiskFreeRate(this.message.tags[TradeCaptureReport.Tags.RiskFreeRate]);
};

TradeCaptureReport.prototype.currencyRatio = function () {
  return new CurrencyRatio(this.message.tags[TradeCaptureReport.Tags.CurrencyRatio]);
};

TradeCaptureReport.prototype.tradePublishIndicator = function () {
  return new TradePublishIndicator(this.message.tags[TradeCaptureReport.Tags.TradePublishIndicator]);
};

TradeCaptureReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradeCaptureReport.Tags.MarketSegmentID]);
};

TradeCaptureReport.Tags = {
  Instrument: '55',
  FinancingDetails: '913',
  OrderQtyData: '38',
  YieldData: '235',
  UndInstrmtGrp: '711',
  SpreadOrBenchmarkCurveData: '218',
  PositionAmountData: '753',
  TrdInstrmtLegGrp: '555',
  TrdRegTimestamps: '768',
  TrdCapRptSideGrp: '552',
  RootParties: '1116',
  TrdRepIndicatorsGrp: '1387',
  ApplicationSequenceControl: '1180',
  TradeReportID: '571',
  TradeReportTransType: '487',
  TradeReportType: '856',
  TradeRequestID: '568',
  TrdType: '828',
  TrdSubType: '829',
  SecondaryTrdType: '855',
  TransferReason: '830',
  ExecType: '150',
  TotNumTradeReports: '748',
  LastRptRequested: '912',
  UnsolicitedIndicator: '325',
  SubscriptionRequestType: '263',
  TradeReportRefID: '572',
  SecondaryTradeReportRefID: '881',
  SecondaryTradeReportID: '818',
  TradeLinkID: '820',
  TrdMatchID: '880',
  ExecID: '17',
  OrdStatus: '39',
  SecondaryExecID: '527',
  ExecRestatementReason: '378',
  PreviouslyReported: '570',
  PriceType: '423',
  QtyType: '854',
  UnderlyingTradingSessionID: '822',
  UnderlyingTradingSessionSubID: '823',
  LastQty: '32',
  LastPx: '31',
  LastParPx: '669',
  LastSpotRate: '194',
  LastForwardPoints: '195',
  LastMkt: '30',
  TradeDate: '75',
  ClearingBusinessDate: '715',
  AvgPx: '6',
  AvgPxIndicator: '819',
  MultiLegReportingType: '442',
  TradeLegRefID: '824',
  TransactTime: '60',
  SettlType: '63',
  SettlDate: '64',
  MatchStatus: '573',
  MatchType: '574',
  CopyMsgIndicator: '797',
  PublishTrdIndicator: '852',
  ShortSaleReason: '853',
  TrdRptStatus: '939',
  AsOfIndicator: '1015',
  SettlSessID: '716',
  SettlSessSubID: '717',
  TierCode: '994',
  MessageEventSource: '1011',
  LastUpdateTime: '779',
  RndPx: '991',
  TradeID: '1003',
  SecondaryTradeID: '1040',
  FirmTradeID: '1041',
  SecondaryFirmTradeID: '1042',
  CalculatedCcyLastQty: '1056',
  LastSwapPoints: '1071',
  UnderlyingSettlementDate: '987',
  GrossTradeAmt: '381',
  OrderCategory: '1115',
  TradeHandlingInstr: '1123',
  OrigTradeHandlingInstr: '1124',
  OrigTradeDate: '1125',
  OrigTradeID: '1126',
  OrigSecondaryTradeID: '1127',
  TZTransactTime: '1132',
  ReportedPxDiff: '1134',
  Currency: '15',
  SettlCurrency: '120',
  RejectText: '1328',
  FeeMultiplier: '1329',
  Volatility: '1188',
  DividendYield: '1380',
  RiskFreeRate: '1190',
  CurrencyRatio: '1382',
  TradePublishIndicator: '1390',
  MarketSegmentID: '1300',
};

TradeCaptureReport.msgType = 'AE';

module.exports = TradeCaptureReport;