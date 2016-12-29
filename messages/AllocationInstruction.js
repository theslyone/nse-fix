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

function AllocationInstruction (allocationInstruction) {
  this.message = allocationInstruction;
}

AllocationInstruction.prototype.ordAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.OrdAllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.OrdAllocGrp]
    .map(function (ordAllocGrp) {
      return new OrdAllocGrp(ordAllocGrp);
  });
};

AllocationInstruction.prototype.execAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.ExecAllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.ExecAllocGrp]
    .map(function (execAllocGrp) {
      return new ExecAllocGrp(execAllocGrp);
  });
};

AllocationInstruction.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.Instrument] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AllocationInstruction.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

AllocationInstruction.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

AllocationInstruction.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

AllocationInstruction.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

AllocationInstruction.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

AllocationInstruction.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationInstruction.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.Stipulations] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

AllocationInstruction.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.YieldData] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

AllocationInstruction.prototype.allocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.AllocGrp] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.AllocGrp]
    .map(function (allocGrp) {
      return new AllocGrp(allocGrp);
  });
};

AllocationInstruction.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstruction.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[AllocationInstruction.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

AllocationInstruction.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationInstruction.Tags.AllocID]);
};

AllocationInstruction.prototype.allocTransType = function () {
  return new AllocTransType(this.message.tags[AllocationInstruction.Tags.AllocTransType]);
};

AllocationInstruction.prototype.allocType = function () {
  return new AllocType(this.message.tags[AllocationInstruction.Tags.AllocType]);
};

AllocationInstruction.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationInstruction.Tags.SecondaryAllocID]);
};

AllocationInstruction.prototype.refAllocId = function () {
  return new RefAllocID(this.message.tags[AllocationInstruction.Tags.RefAllocID]);
};

AllocationInstruction.prototype.allocCancReplaceReason = function () {
  return new AllocCancReplaceReason(this.message.tags[AllocationInstruction.Tags.AllocCancReplaceReason]);
};

AllocationInstruction.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationInstruction.Tags.AllocIntermedReqType]);
};

AllocationInstruction.prototype.allocLinkId = function () {
  return new AllocLinkID(this.message.tags[AllocationInstruction.Tags.AllocLinkID]);
};

AllocationInstruction.prototype.allocLinkType = function () {
  return new AllocLinkType(this.message.tags[AllocationInstruction.Tags.AllocLinkType]);
};

AllocationInstruction.prototype.bookingRefId = function () {
  return new BookingRefID(this.message.tags[AllocationInstruction.Tags.BookingRefID]);
};

AllocationInstruction.prototype.allocNoOrdersType = function () {
  return new AllocNoOrdersType(this.message.tags[AllocationInstruction.Tags.AllocNoOrdersType]);
};

AllocationInstruction.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[AllocationInstruction.Tags.PreviouslyReported]);
};

AllocationInstruction.prototype.reversalIndicator = function () {
  return new ReversalIndicator(this.message.tags[AllocationInstruction.Tags.ReversalIndicator]);
};

AllocationInstruction.prototype.matchType = function () {
  return new MatchType(this.message.tags[AllocationInstruction.Tags.MatchType]);
};

AllocationInstruction.prototype.side = function () {
  return new Side(this.message.tags[AllocationInstruction.Tags.Side]);
};

AllocationInstruction.prototype.quantity = function () {
  return new Quantity(this.message.tags[AllocationInstruction.Tags.Quantity]);
};

AllocationInstruction.prototype.qtyType = function () {
  return new QtyType(this.message.tags[AllocationInstruction.Tags.QtyType]);
};

AllocationInstruction.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[AllocationInstruction.Tags.LastMkt]);
};

AllocationInstruction.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[AllocationInstruction.Tags.TradeOriginationDate]);
};

AllocationInstruction.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[AllocationInstruction.Tags.TradingSessionID]);
};

AllocationInstruction.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[AllocationInstruction.Tags.TradingSessionSubID]);
};

AllocationInstruction.prototype.priceType = function () {
  return new PriceType(this.message.tags[AllocationInstruction.Tags.PriceType]);
};

AllocationInstruction.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[AllocationInstruction.Tags.AvgPx]);
};

AllocationInstruction.prototype.avgParPx = function () {
  return new AvgParPx(this.message.tags[AllocationInstruction.Tags.AvgParPx]);
};

AllocationInstruction.prototype.currency = function () {
  return new Currency(this.message.tags[AllocationInstruction.Tags.Currency]);
};

AllocationInstruction.prototype.avgPxPrecision = function () {
  return new AvgPxPrecision(this.message.tags[AllocationInstruction.Tags.AvgPxPrecision]);
};

AllocationInstruction.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationInstruction.Tags.TradeDate]);
};

AllocationInstruction.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationInstruction.Tags.TransactTime]);
};

AllocationInstruction.prototype.settlType = function () {
  return new SettlType(this.message.tags[AllocationInstruction.Tags.SettlType]);
};

AllocationInstruction.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[AllocationInstruction.Tags.SettlDate]);
};

AllocationInstruction.prototype.bookingType = function () {
  return new BookingType(this.message.tags[AllocationInstruction.Tags.BookingType]);
};

AllocationInstruction.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[AllocationInstruction.Tags.GrossTradeAmt]);
};

AllocationInstruction.prototype.concession = function () {
  return new Concession(this.message.tags[AllocationInstruction.Tags.Concession]);
};

AllocationInstruction.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[AllocationInstruction.Tags.TotalTakedown]);
};

AllocationInstruction.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[AllocationInstruction.Tags.NetMoney]);
};

AllocationInstruction.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[AllocationInstruction.Tags.PositionEffect]);
};

AllocationInstruction.prototype.autoAcceptIndicator = function () {
  return new AutoAcceptIndicator(this.message.tags[AllocationInstruction.Tags.AutoAcceptIndicator]);
};

AllocationInstruction.prototype.text = function () {
  return new Text(this.message.tags[AllocationInstruction.Tags.Text]);
};

AllocationInstruction.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationInstruction.Tags.EncodedTextLen]);
};

AllocationInstruction.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationInstruction.Tags.EncodedText]);
};

AllocationInstruction.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[AllocationInstruction.Tags.NumDaysInterest]);
};

AllocationInstruction.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AllocationInstruction.Tags.AccruedInterestRate]);
};

AllocationInstruction.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AllocationInstruction.Tags.AccruedInterestAmt]);
};

AllocationInstruction.prototype.totalAccruedInterestAmt = function () {
  return new TotalAccruedInterestAmt(this.message.tags[AllocationInstruction.Tags.TotalAccruedInterestAmt]);
};

AllocationInstruction.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[AllocationInstruction.Tags.InterestAtMaturity]);
};

AllocationInstruction.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[AllocationInstruction.Tags.EndAccruedInterestAmt]);
};

AllocationInstruction.prototype.startCash = function () {
  return new StartCash(this.message.tags[AllocationInstruction.Tags.StartCash]);
};

AllocationInstruction.prototype.endCash = function () {
  return new EndCash(this.message.tags[AllocationInstruction.Tags.EndCash]);
};

AllocationInstruction.prototype.legalConfirm = function () {
  return new LegalConfirm(this.message.tags[AllocationInstruction.Tags.LegalConfirm]);
};

AllocationInstruction.prototype.totNoAllocs = function () {
  return new TotNoAllocs(this.message.tags[AllocationInstruction.Tags.TotNoAllocs]);
};

AllocationInstruction.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[AllocationInstruction.Tags.LastFragment]);
};

AllocationInstruction.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AllocationInstruction.Tags.AvgPxIndicator]);
};

AllocationInstruction.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AllocationInstruction.Tags.ClearingBusinessDate]);
};

AllocationInstruction.prototype.trdType = function () {
  return new TrdType(this.message.tags[AllocationInstruction.Tags.TrdType]);
};

AllocationInstruction.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[AllocationInstruction.Tags.TrdSubType]);
};

AllocationInstruction.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[AllocationInstruction.Tags.CustOrderCapacity]);
};

AllocationInstruction.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[AllocationInstruction.Tags.TradeInputSource]);
};

AllocationInstruction.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[AllocationInstruction.Tags.MultiLegReportingType]);
};

AllocationInstruction.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[AllocationInstruction.Tags.MessageEventSource]);
};

AllocationInstruction.prototype.rndPx = function () {
  return new RndPx(this.message.tags[AllocationInstruction.Tags.RndPx]);
};

AllocationInstruction.Tags = {
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

AllocationInstruction.msgType = 'J';

module.exports = AllocationInstruction;