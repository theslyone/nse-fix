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
var PositionAmountData = require('../components/PositionAmountData');
var AllocGrp = require('../components/AllocGrp');
var AllocID = require('../fields/AllocID');
var AllocTransType = require('../fields/AllocTransType');
var AllocType = require('../fields/AllocType');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var RefAllocID = require('../fields/RefAllocID');
var AllocCancReplaceReason = require('../fields/AllocCancReplaceReason');
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
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var TradeInputSource = require('../fields/TradeInputSource');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var MessageEventSource = require('../fields/MessageEventSource');
var RndPx = require('../fields/RndPx');

function AllocationInstructionAlert (allocationInstructionAlert) {
  this.message = allocationInstructionAlert;
}

AllocationInstructionAlert.prototype.ordAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.OrdAllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.OrdAllocGrp]
    .map(function (ordAllocGrp) {
      return new OrdAllocGrp(ordAllocGrp);
  });
};

AllocationInstructionAlert.prototype.execAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.ExecAllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.ExecAllocGrp]
    .map(function (execAllocGrp) {
      return new ExecAllocGrp(execAllocGrp);
  });
};

AllocationInstructionAlert.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.Instrument] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AllocationInstructionAlert.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

AllocationInstructionAlert.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

AllocationInstructionAlert.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

AllocationInstructionAlert.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

AllocationInstructionAlert.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

AllocationInstructionAlert.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationInstructionAlert.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.Stipulations] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

AllocationInstructionAlert.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.YieldData] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

AllocationInstructionAlert.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

AllocationInstructionAlert.prototype.allocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAlert.Tags.AllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAlert.Tags.AllocGrp]
    .map(function (allocGrp) {
      return new AllocGrp(allocGrp);
  });
};

AllocationInstructionAlert.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationInstructionAlert.Tags.AllocID]);
};

AllocationInstructionAlert.prototype.allocTransType = function () {
  return new AllocTransType(this.message.tags[AllocationInstructionAlert.Tags.AllocTransType]);
};

AllocationInstructionAlert.prototype.allocType = function () {
  return new AllocType(this.message.tags[AllocationInstructionAlert.Tags.AllocType]);
};

AllocationInstructionAlert.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationInstructionAlert.Tags.SecondaryAllocID]);
};

AllocationInstructionAlert.prototype.refAllocId = function () {
  return new RefAllocID(this.message.tags[AllocationInstructionAlert.Tags.RefAllocID]);
};

AllocationInstructionAlert.prototype.allocCancReplaceReason = function () {
  return new AllocCancReplaceReason(this.message.tags[AllocationInstructionAlert.Tags.AllocCancReplaceReason]);
};

AllocationInstructionAlert.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationInstructionAlert.Tags.AllocIntermedReqType]);
};

AllocationInstructionAlert.prototype.allocLinkId = function () {
  return new AllocLinkID(this.message.tags[AllocationInstructionAlert.Tags.AllocLinkID]);
};

AllocationInstructionAlert.prototype.allocLinkType = function () {
  return new AllocLinkType(this.message.tags[AllocationInstructionAlert.Tags.AllocLinkType]);
};

AllocationInstructionAlert.prototype.bookingRefId = function () {
  return new BookingRefID(this.message.tags[AllocationInstructionAlert.Tags.BookingRefID]);
};

AllocationInstructionAlert.prototype.allocNoOrdersType = function () {
  return new AllocNoOrdersType(this.message.tags[AllocationInstructionAlert.Tags.AllocNoOrdersType]);
};

AllocationInstructionAlert.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[AllocationInstructionAlert.Tags.PreviouslyReported]);
};

AllocationInstructionAlert.prototype.reversalIndicator = function () {
  return new ReversalIndicator(this.message.tags[AllocationInstructionAlert.Tags.ReversalIndicator]);
};

AllocationInstructionAlert.prototype.matchType = function () {
  return new MatchType(this.message.tags[AllocationInstructionAlert.Tags.MatchType]);
};

AllocationInstructionAlert.prototype.side = function () {
  return new Side(this.message.tags[AllocationInstructionAlert.Tags.Side]);
};

AllocationInstructionAlert.prototype.quantity = function () {
  return new Quantity(this.message.tags[AllocationInstructionAlert.Tags.Quantity]);
};

AllocationInstructionAlert.prototype.qtyType = function () {
  return new QtyType(this.message.tags[AllocationInstructionAlert.Tags.QtyType]);
};

AllocationInstructionAlert.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[AllocationInstructionAlert.Tags.LastMkt]);
};

AllocationInstructionAlert.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[AllocationInstructionAlert.Tags.TradeOriginationDate]);
};

AllocationInstructionAlert.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[AllocationInstructionAlert.Tags.TradingSessionID]);
};

AllocationInstructionAlert.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[AllocationInstructionAlert.Tags.TradingSessionSubID]);
};

AllocationInstructionAlert.prototype.priceType = function () {
  return new PriceType(this.message.tags[AllocationInstructionAlert.Tags.PriceType]);
};

AllocationInstructionAlert.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[AllocationInstructionAlert.Tags.AvgPx]);
};

AllocationInstructionAlert.prototype.avgParPx = function () {
  return new AvgParPx(this.message.tags[AllocationInstructionAlert.Tags.AvgParPx]);
};

AllocationInstructionAlert.prototype.currency = function () {
  return new Currency(this.message.tags[AllocationInstructionAlert.Tags.Currency]);
};

AllocationInstructionAlert.prototype.avgPxPrecision = function () {
  return new AvgPxPrecision(this.message.tags[AllocationInstructionAlert.Tags.AvgPxPrecision]);
};

AllocationInstructionAlert.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationInstructionAlert.Tags.TradeDate]);
};

AllocationInstructionAlert.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationInstructionAlert.Tags.TransactTime]);
};

AllocationInstructionAlert.prototype.settlType = function () {
  return new SettlType(this.message.tags[AllocationInstructionAlert.Tags.SettlType]);
};

AllocationInstructionAlert.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[AllocationInstructionAlert.Tags.SettlDate]);
};

AllocationInstructionAlert.prototype.bookingType = function () {
  return new BookingType(this.message.tags[AllocationInstructionAlert.Tags.BookingType]);
};

AllocationInstructionAlert.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[AllocationInstructionAlert.Tags.GrossTradeAmt]);
};

AllocationInstructionAlert.prototype.concession = function () {
  return new Concession(this.message.tags[AllocationInstructionAlert.Tags.Concession]);
};

AllocationInstructionAlert.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[AllocationInstructionAlert.Tags.TotalTakedown]);
};

AllocationInstructionAlert.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[AllocationInstructionAlert.Tags.NetMoney]);
};

AllocationInstructionAlert.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[AllocationInstructionAlert.Tags.PositionEffect]);
};

AllocationInstructionAlert.prototype.autoAcceptIndicator = function () {
  return new AutoAcceptIndicator(this.message.tags[AllocationInstructionAlert.Tags.AutoAcceptIndicator]);
};

AllocationInstructionAlert.prototype.text = function () {
  return new Text(this.message.tags[AllocationInstructionAlert.Tags.Text]);
};

AllocationInstructionAlert.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationInstructionAlert.Tags.EncodedTextLen]);
};

AllocationInstructionAlert.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationInstructionAlert.Tags.EncodedText]);
};

AllocationInstructionAlert.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[AllocationInstructionAlert.Tags.NumDaysInterest]);
};

AllocationInstructionAlert.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AllocationInstructionAlert.Tags.AccruedInterestRate]);
};

AllocationInstructionAlert.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AllocationInstructionAlert.Tags.AccruedInterestAmt]);
};

AllocationInstructionAlert.prototype.totalAccruedInterestAmt = function () {
  return new TotalAccruedInterestAmt(this.message.tags[AllocationInstructionAlert.Tags.TotalAccruedInterestAmt]);
};

AllocationInstructionAlert.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[AllocationInstructionAlert.Tags.InterestAtMaturity]);
};

AllocationInstructionAlert.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[AllocationInstructionAlert.Tags.EndAccruedInterestAmt]);
};

AllocationInstructionAlert.prototype.startCash = function () {
  return new StartCash(this.message.tags[AllocationInstructionAlert.Tags.StartCash]);
};

AllocationInstructionAlert.prototype.endCash = function () {
  return new EndCash(this.message.tags[AllocationInstructionAlert.Tags.EndCash]);
};

AllocationInstructionAlert.prototype.legalConfirm = function () {
  return new LegalConfirm(this.message.tags[AllocationInstructionAlert.Tags.LegalConfirm]);
};

AllocationInstructionAlert.prototype.totNoAllocs = function () {
  return new TotNoAllocs(this.message.tags[AllocationInstructionAlert.Tags.TotNoAllocs]);
};

AllocationInstructionAlert.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[AllocationInstructionAlert.Tags.LastFragment]);
};

AllocationInstructionAlert.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AllocationInstructionAlert.Tags.AvgPxIndicator]);
};

AllocationInstructionAlert.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AllocationInstructionAlert.Tags.ClearingBusinessDate]);
};

AllocationInstructionAlert.prototype.trdType = function () {
  return new TrdType(this.message.tags[AllocationInstructionAlert.Tags.TrdType]);
};

AllocationInstructionAlert.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[AllocationInstructionAlert.Tags.TrdSubType]);
};

AllocationInstructionAlert.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[AllocationInstructionAlert.Tags.CustOrderCapacity]);
};

AllocationInstructionAlert.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[AllocationInstructionAlert.Tags.TradeInputSource]);
};

AllocationInstructionAlert.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[AllocationInstructionAlert.Tags.MultiLegReportingType]);
};

AllocationInstructionAlert.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[AllocationInstructionAlert.Tags.MessageEventSource]);
};

AllocationInstructionAlert.prototype.rndPx = function () {
  return new RndPx(this.message.tags[AllocationInstructionAlert.Tags.RndPx]);
};

AllocationInstructionAlert.Tags = {
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
  PositionAmountData: '753',
  AllocGrp: '78',
  AllocID: '70',
  AllocTransType: '71',
  AllocType: '626',
  SecondaryAllocID: '793',
  RefAllocID: '72',
  AllocCancReplaceReason: '796',
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
  AvgPxIndicator: '819',
  ClearingBusinessDate: '715',
  TrdType: '828',
  TrdSubType: '829',
  CustOrderCapacity: '582',
  TradeInputSource: '578',
  MultiLegReportingType: '442',
  MessageEventSource: '1011',
  RndPx: '991',
};

AllocationInstructionAlert.msgType = 'BM';

module.exports = AllocationInstructionAlert;