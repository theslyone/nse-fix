var OrdAllocGrp = require('../components/OrdAllocGrp');
var ExecAllocGrp = require('../components/ExecAllocGrp');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Parties = require('../components/Parties');
var Stipulations = require('../components/Stipulations');
var YieldData = require('../components/YieldData');
var AllocGrp = require('../components/AllocGrp');
var PositionAmountData = require('../components/PositionAmountData');
var AllocReportID = require('../fields/AllocReportID');
var AllocID = require('../fields/AllocID');
var AllocTransType = require('../fields/AllocTransType');
var AllocReportRefID = require('../fields/AllocReportRefID');
var AllocCancReplaceReason = require('../fields/AllocCancReplaceReason');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var AllocReportType = require('../fields/AllocReportType');
var AllocStatus = require('../fields/AllocStatus');
var AllocRejCode = require('../fields/AllocRejCode');
var RefAllocID = require('../fields/RefAllocID');
var AllocIntermedReqType = require('../fields/AllocIntermedReqType');
var AllocLinkID = require('../fields/AllocLinkID');
var AllocLinkType = require('../fields/AllocLinkType');
var BookingRefID = require('../fields/BookingRefID');
var AllocNoOrdersType = require('../fields/AllocNoOrdersType');
var PreviouslyReported = require('../fields/PreviouslyReported');
var ReversalIndicator = require('../fields/ReversalIndicator');
var MatchType = require('../fields/MatchType');
var Side = require('../fields/Side');
var Quantity = require('../fields/Quantity');
var QtyType = require('../fields/QtyType');
var LastMkt = require('../fields/LastMkt');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var PriceType = require('../fields/PriceType');
var AvgPx = require('../fields/AvgPx');
var AvgParPx = require('../fields/AvgParPx');
var Currency = require('../fields/Currency');
var AvgPxPrecision = require('../fields/AvgPxPrecision');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var BookingType = require('../fields/BookingType');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
var Concession = require('../fields/Concession');
var TotalTakedown = require('../fields/TotalTakedown');
var NetMoney = require('../fields/NetMoney');
var PositionEffect = require('../fields/PositionEffect');
var AutoAcceptIndicator = require('../fields/AutoAcceptIndicator');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var NumDaysInterest = require('../fields/NumDaysInterest');
var AccruedInterestRate = require('../fields/AccruedInterestRate');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var TotalAccruedInterestAmt = require('../fields/TotalAccruedInterestAmt');
var InterestAtMaturity = require('../fields/InterestAtMaturity');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var LegalConfirm = require('../fields/LegalConfirm');
var TotNoAllocs = require('../fields/TotNoAllocs');
var LastFragment = require('../fields/LastFragment');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var TradeInputSource = require('../fields/TradeInputSource');
var RndPx = require('../fields/RndPx');
var MessageEventSource = require('../fields/MessageEventSource');
var TradeInputDevice = require('../fields/TradeInputDevice');
var AvgPxIndicator = require('../fields/AvgPxIndicator');

function AllocationReport (allocationReport) {
  this.message = allocationReport;
}

AllocationReport.prototype.ordAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.OrdAllocGrp] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.OrdAllocGrp]
    .map(function (ordAllocGrp) {
      return new OrdAllocGrp(ordAllocGrp);
  });
};

AllocationReport.prototype.execAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.ExecAllocGrp] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.ExecAllocGrp]
    .map(function (execAllocGrp) {
      return new ExecAllocGrp(execAllocGrp);
  });
};

AllocationReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AllocationReport.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

AllocationReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

AllocationReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

AllocationReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

AllocationReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

AllocationReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationReport.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.Stipulations] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

AllocationReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

AllocationReport.prototype.allocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.AllocGrp] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.AllocGrp]
    .map(function (allocGrp) {
      return new AllocGrp(allocGrp);
  });
};

AllocationReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[AllocationReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

AllocationReport.prototype.allocReportId = function () {
  return new AllocReportID(this.message.tags[AllocationReport.Tags.AllocReportID]);
};

AllocationReport.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationReport.Tags.AllocID]);
};

AllocationReport.prototype.allocTransType = function () {
  return new AllocTransType(this.message.tags[AllocationReport.Tags.AllocTransType]);
};

AllocationReport.prototype.allocReportRefId = function () {
  return new AllocReportRefID(this.message.tags[AllocationReport.Tags.AllocReportRefID]);
};

AllocationReport.prototype.allocCancReplaceReason = function () {
  return new AllocCancReplaceReason(this.message.tags[AllocationReport.Tags.AllocCancReplaceReason]);
};

AllocationReport.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationReport.Tags.SecondaryAllocID]);
};

AllocationReport.prototype.allocReportType = function () {
  return new AllocReportType(this.message.tags[AllocationReport.Tags.AllocReportType]);
};

AllocationReport.prototype.allocStatus = function () {
  return new AllocStatus(this.message.tags[AllocationReport.Tags.AllocStatus]);
};

AllocationReport.prototype.allocRejCode = function () {
  return new AllocRejCode(this.message.tags[AllocationReport.Tags.AllocRejCode]);
};

AllocationReport.prototype.refAllocId = function () {
  return new RefAllocID(this.message.tags[AllocationReport.Tags.RefAllocID]);
};

AllocationReport.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationReport.Tags.AllocIntermedReqType]);
};

AllocationReport.prototype.allocLinkId = function () {
  return new AllocLinkID(this.message.tags[AllocationReport.Tags.AllocLinkID]);
};

AllocationReport.prototype.allocLinkType = function () {
  return new AllocLinkType(this.message.tags[AllocationReport.Tags.AllocLinkType]);
};

AllocationReport.prototype.bookingRefId = function () {
  return new BookingRefID(this.message.tags[AllocationReport.Tags.BookingRefID]);
};

AllocationReport.prototype.allocNoOrdersType = function () {
  return new AllocNoOrdersType(this.message.tags[AllocationReport.Tags.AllocNoOrdersType]);
};

AllocationReport.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[AllocationReport.Tags.PreviouslyReported]);
};

AllocationReport.prototype.reversalIndicator = function () {
  return new ReversalIndicator(this.message.tags[AllocationReport.Tags.ReversalIndicator]);
};

AllocationReport.prototype.matchType = function () {
  return new MatchType(this.message.tags[AllocationReport.Tags.MatchType]);
};

AllocationReport.prototype.side = function () {
  return new Side(this.message.tags[AllocationReport.Tags.Side]);
};

AllocationReport.prototype.quantity = function () {
  return new Quantity(this.message.tags[AllocationReport.Tags.Quantity]);
};

AllocationReport.prototype.qtyType = function () {
  return new QtyType(this.message.tags[AllocationReport.Tags.QtyType]);
};

AllocationReport.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[AllocationReport.Tags.LastMkt]);
};

AllocationReport.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[AllocationReport.Tags.TradeOriginationDate]);
};

AllocationReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[AllocationReport.Tags.TradingSessionID]);
};

AllocationReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[AllocationReport.Tags.TradingSessionSubID]);
};

AllocationReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[AllocationReport.Tags.PriceType]);
};

AllocationReport.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[AllocationReport.Tags.AvgPx]);
};

AllocationReport.prototype.avgParPx = function () {
  return new AvgParPx(this.message.tags[AllocationReport.Tags.AvgParPx]);
};

AllocationReport.prototype.currency = function () {
  return new Currency(this.message.tags[AllocationReport.Tags.Currency]);
};

AllocationReport.prototype.avgPxPrecision = function () {
  return new AvgPxPrecision(this.message.tags[AllocationReport.Tags.AvgPxPrecision]);
};

AllocationReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationReport.Tags.TradeDate]);
};

AllocationReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationReport.Tags.TransactTime]);
};

AllocationReport.prototype.settlType = function () {
  return new SettlType(this.message.tags[AllocationReport.Tags.SettlType]);
};

AllocationReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[AllocationReport.Tags.SettlDate]);
};

AllocationReport.prototype.bookingType = function () {
  return new BookingType(this.message.tags[AllocationReport.Tags.BookingType]);
};

AllocationReport.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[AllocationReport.Tags.GrossTradeAmt]);
};

AllocationReport.prototype.concession = function () {
  return new Concession(this.message.tags[AllocationReport.Tags.Concession]);
};

AllocationReport.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[AllocationReport.Tags.TotalTakedown]);
};

AllocationReport.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[AllocationReport.Tags.NetMoney]);
};

AllocationReport.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[AllocationReport.Tags.PositionEffect]);
};

AllocationReport.prototype.autoAcceptIndicator = function () {
  return new AutoAcceptIndicator(this.message.tags[AllocationReport.Tags.AutoAcceptIndicator]);
};

AllocationReport.prototype.text = function () {
  return new Text(this.message.tags[AllocationReport.Tags.Text]);
};

AllocationReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationReport.Tags.EncodedTextLen]);
};

AllocationReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationReport.Tags.EncodedText]);
};

AllocationReport.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[AllocationReport.Tags.NumDaysInterest]);
};

AllocationReport.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AllocationReport.Tags.AccruedInterestRate]);
};

AllocationReport.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AllocationReport.Tags.AccruedInterestAmt]);
};

AllocationReport.prototype.totalAccruedInterestAmt = function () {
  return new TotalAccruedInterestAmt(this.message.tags[AllocationReport.Tags.TotalAccruedInterestAmt]);
};

AllocationReport.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[AllocationReport.Tags.InterestAtMaturity]);
};

AllocationReport.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[AllocationReport.Tags.EndAccruedInterestAmt]);
};

AllocationReport.prototype.startCash = function () {
  return new StartCash(this.message.tags[AllocationReport.Tags.StartCash]);
};

AllocationReport.prototype.endCash = function () {
  return new EndCash(this.message.tags[AllocationReport.Tags.EndCash]);
};

AllocationReport.prototype.legalConfirm = function () {
  return new LegalConfirm(this.message.tags[AllocationReport.Tags.LegalConfirm]);
};

AllocationReport.prototype.totNoAllocs = function () {
  return new TotNoAllocs(this.message.tags[AllocationReport.Tags.TotNoAllocs]);
};

AllocationReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[AllocationReport.Tags.LastFragment]);
};

AllocationReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AllocationReport.Tags.ClearingBusinessDate]);
};

AllocationReport.prototype.trdType = function () {
  return new TrdType(this.message.tags[AllocationReport.Tags.TrdType]);
};

AllocationReport.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[AllocationReport.Tags.TrdSubType]);
};

AllocationReport.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[AllocationReport.Tags.MultiLegReportingType]);
};

AllocationReport.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[AllocationReport.Tags.CustOrderCapacity]);
};

AllocationReport.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[AllocationReport.Tags.TradeInputSource]);
};

AllocationReport.prototype.rndPx = function () {
  return new RndPx(this.message.tags[AllocationReport.Tags.RndPx]);
};

AllocationReport.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[AllocationReport.Tags.MessageEventSource]);
};

AllocationReport.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[AllocationReport.Tags.TradeInputDevice]);
};

AllocationReport.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AllocationReport.Tags.AvgPxIndicator]);
};

AllocationReport.Tags = {
  OrdAllocGrp: '73',
  ExecAllocGrp: '124',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SpreadOrBenchmarkCurveData: '218',
  Parties: '453',
  Stipulations: '232',
  YieldData: '235',
  AllocGrp: '78',
  PositionAmountData: '753',
  AllocReportID: '755',
  AllocID: '70',
  AllocTransType: '71',
  AllocReportRefID: '795',
  AllocCancReplaceReason: '796',
  SecondaryAllocID: '793',
  AllocReportType: '794',
  AllocStatus: '87',
  AllocRejCode: '88',
  RefAllocID: '72',
  AllocIntermedReqType: '808',
  AllocLinkID: '196',
  AllocLinkType: '197',
  BookingRefID: '466',
  AllocNoOrdersType: '857',
  PreviouslyReported: '570',
  ReversalIndicator: '700',
  MatchType: '574',
  Side: '54',
  Quantity: '53',
  QtyType: '854',
  LastMkt: '30',
  TradeOriginationDate: '229',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  PriceType: '423',
  AvgPx: '6',
  AvgParPx: '860',
  Currency: '15',
  AvgPxPrecision: '74',
  TradeDate: '75',
  TransactTime: '60',
  SettlType: '63',
  SettlDate: '64',
  BookingType: '775',
  GrossTradeAmt: '381',
  Concession: '238',
  TotalTakedown: '237',
  NetMoney: '118',
  PositionEffect: '77',
  AutoAcceptIndicator: '754',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  NumDaysInterest: '157',
  AccruedInterestRate: '158',
  AccruedInterestAmt: '159',
  TotalAccruedInterestAmt: '540',
  InterestAtMaturity: '738',
  EndAccruedInterestAmt: '920',
  StartCash: '921',
  EndCash: '922',
  LegalConfirm: '650',
  TotNoAllocs: '892',
  LastFragment: '893',
  ClearingBusinessDate: '715',
  TrdType: '828',
  TrdSubType: '829',
  MultiLegReportingType: '442',
  CustOrderCapacity: '582',
  TradeInputSource: '578',
  RndPx: '991',
  MessageEventSource: '1011',
  TradeInputDevice: '579',
  AvgPxIndicator: '819',
};

AllocationReport.msgType = 'AS';

module.exports = AllocationReport;