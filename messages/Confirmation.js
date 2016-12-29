var Parties = require('../components/Parties');
var OrdAllocGrp = require('../components/OrdAllocGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var YieldData = require('../components/YieldData');
var CpctyConfGrp = require('../components/CpctyConfGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var CommissionData = require('../components/CommissionData');
var Stipulations = require('../components/Stipulations');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var ConfirmID = require('../fields/ConfirmID');
var ConfirmRefID = require('../fields/ConfirmRefID');
var ConfirmReqID = require('../fields/ConfirmReqID');
var ConfirmTransType = require('../fields/ConfirmTransType');
var ConfirmType = require('../fields/ConfirmType');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var LegalConfirm = require('../fields/LegalConfirm');
var ConfirmStatus = require('../fields/ConfirmStatus');
var AllocID = require('../fields/AllocID');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var IndividualAllocID = require('../fields/IndividualAllocID');
var TransactTime = require('../fields/TransactTime');
var TradeDate = require('../fields/TradeDate');
var AllocQty = require('../fields/AllocQty');
var QtyType = require('../fields/QtyType');
var Side = require('../fields/Side');
var Currency = require('../fields/Currency');
var LastMkt = require('../fields/LastMkt');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocAccountType = require('../fields/AllocAccountType');
var AvgPx = require('../fields/AvgPx');
var AvgPxPrecision = require('../fields/AvgPxPrecision');
var PriceType = require('../fields/PriceType');
var AvgParPx = require('../fields/AvgParPx');
var ReportedPx = require('../fields/ReportedPx');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ProcessCode = require('../fields/ProcessCode');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
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
var MaturityNetMoney = require('../fields/MaturityNetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var SettlCurrency = require('../fields/SettlCurrency');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var SharedCommission = require('../fields/SharedCommission');

function Confirmation (confirmation) {
  this.message = confirmation;
}

Confirmation.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.Parties] === undefined) return null;
  return this.message.groups[Confirmation.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

Confirmation.prototype.ordAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.OrdAllocGrp] === undefined) return null;
  return this.message.groups[Confirmation.Tags.OrdAllocGrp]
    .map(function (ordAllocGrp) {
      return new OrdAllocGrp(ordAllocGrp);
  });
};

Confirmation.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[Confirmation.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

Confirmation.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.Instrument] === undefined) return null;
  return this.message.groups[Confirmation.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

Confirmation.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[Confirmation.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

Confirmation.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[Confirmation.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

Confirmation.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[Confirmation.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

Confirmation.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[Confirmation.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

Confirmation.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.YieldData] === undefined) return null;
  return this.message.groups[Confirmation.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

Confirmation.prototype.cpctyConfGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.CpctyConfGrp] === undefined) return null;
  return this.message.groups[Confirmation.Tags.CpctyConfGrp]
    .map(function (cpctyConfGrp) {
      return new CpctyConfGrp(cpctyConfGrp);
  });
};

Confirmation.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[Confirmation.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

Confirmation.prototype.settlInstructionsData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.SettlInstructionsData] === undefined) return null;
  return this.message.groups[Confirmation.Tags.SettlInstructionsData]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

Confirmation.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.CommissionData] === undefined) return null;
  return this.message.groups[Confirmation.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

Confirmation.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.Stipulations] === undefined) return null;
  return this.message.groups[Confirmation.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

Confirmation.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Confirmation.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[Confirmation.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

Confirmation.prototype.confirmId = function () {
  return new ConfirmID(this.message.tags[Confirmation.Tags.ConfirmID]);
};

Confirmation.prototype.confirmRefId = function () {
  return new ConfirmRefID(this.message.tags[Confirmation.Tags.ConfirmRefID]);
};

Confirmation.prototype.confirmReqId = function () {
  return new ConfirmReqID(this.message.tags[Confirmation.Tags.ConfirmReqID]);
};

Confirmation.prototype.confirmTransType = function () {
  return new ConfirmTransType(this.message.tags[Confirmation.Tags.ConfirmTransType]);
};

Confirmation.prototype.confirmType = function () {
  return new ConfirmType(this.message.tags[Confirmation.Tags.ConfirmType]);
};

Confirmation.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[Confirmation.Tags.CopyMsgIndicator]);
};

Confirmation.prototype.legalConfirm = function () {
  return new LegalConfirm(this.message.tags[Confirmation.Tags.LegalConfirm]);
};

Confirmation.prototype.confirmStatus = function () {
  return new ConfirmStatus(this.message.tags[Confirmation.Tags.ConfirmStatus]);
};

Confirmation.prototype.allocId = function () {
  return new AllocID(this.message.tags[Confirmation.Tags.AllocID]);
};

Confirmation.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[Confirmation.Tags.SecondaryAllocID]);
};

Confirmation.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[Confirmation.Tags.IndividualAllocID]);
};

Confirmation.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[Confirmation.Tags.TransactTime]);
};

Confirmation.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[Confirmation.Tags.TradeDate]);
};

Confirmation.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[Confirmation.Tags.AllocQty]);
};

Confirmation.prototype.qtyType = function () {
  return new QtyType(this.message.tags[Confirmation.Tags.QtyType]);
};

Confirmation.prototype.side = function () {
  return new Side(this.message.tags[Confirmation.Tags.Side]);
};

Confirmation.prototype.currency = function () {
  return new Currency(this.message.tags[Confirmation.Tags.Currency]);
};

Confirmation.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[Confirmation.Tags.LastMkt]);
};

Confirmation.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[Confirmation.Tags.AllocAccount]);
};

Confirmation.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[Confirmation.Tags.AllocAcctIDSource]);
};

Confirmation.prototype.allocAccountType = function () {
  return new AllocAccountType(this.message.tags[Confirmation.Tags.AllocAccountType]);
};

Confirmation.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[Confirmation.Tags.AvgPx]);
};

Confirmation.prototype.avgPxPrecision = function () {
  return new AvgPxPrecision(this.message.tags[Confirmation.Tags.AvgPxPrecision]);
};

Confirmation.prototype.priceType = function () {
  return new PriceType(this.message.tags[Confirmation.Tags.PriceType]);
};

Confirmation.prototype.avgParPx = function () {
  return new AvgParPx(this.message.tags[Confirmation.Tags.AvgParPx]);
};

Confirmation.prototype.reportedPx = function () {
  return new ReportedPx(this.message.tags[Confirmation.Tags.ReportedPx]);
};

Confirmation.prototype.text = function () {
  return new Text(this.message.tags[Confirmation.Tags.Text]);
};

Confirmation.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[Confirmation.Tags.EncodedTextLen]);
};

Confirmation.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[Confirmation.Tags.EncodedText]);
};

Confirmation.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[Confirmation.Tags.ProcessCode]);
};

Confirmation.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[Confirmation.Tags.GrossTradeAmt]);
};

Confirmation.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[Confirmation.Tags.NumDaysInterest]);
};

Confirmation.prototype.exDate = function () {
  return new ExDate(this.message.tags[Confirmation.Tags.ExDate]);
};

Confirmation.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[Confirmation.Tags.AccruedInterestRate]);
};

Confirmation.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[Confirmation.Tags.AccruedInterestAmt]);
};

Confirmation.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[Confirmation.Tags.InterestAtMaturity]);
};

Confirmation.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[Confirmation.Tags.EndAccruedInterestAmt]);
};

Confirmation.prototype.startCash = function () {
  return new StartCash(this.message.tags[Confirmation.Tags.StartCash]);
};

Confirmation.prototype.endCash = function () {
  return new EndCash(this.message.tags[Confirmation.Tags.EndCash]);
};

Confirmation.prototype.concession = function () {
  return new Concession(this.message.tags[Confirmation.Tags.Concession]);
};

Confirmation.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[Confirmation.Tags.TotalTakedown]);
};

Confirmation.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[Confirmation.Tags.NetMoney]);
};

Confirmation.prototype.maturityNetMoney = function () {
  return new MaturityNetMoney(this.message.tags[Confirmation.Tags.MaturityNetMoney]);
};

Confirmation.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[Confirmation.Tags.SettlCurrAmt]);
};

Confirmation.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[Confirmation.Tags.SettlCurrency]);
};

Confirmation.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[Confirmation.Tags.SettlCurrFxRate]);
};

Confirmation.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[Confirmation.Tags.SettlCurrFxRateCalc]);
};

Confirmation.prototype.settlType = function () {
  return new SettlType(this.message.tags[Confirmation.Tags.SettlType]);
};

Confirmation.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[Confirmation.Tags.SettlDate]);
};

Confirmation.prototype.sharedCommission = function () {
  return new SharedCommission(this.message.tags[Confirmation.Tags.SharedCommission]);
};

Confirmation.Tags = {
  Parties: '453',
  OrdAllocGrp: '73',
  TrdRegTimestamps: '768',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  YieldData: '235',
  CpctyConfGrp: '862',
  SpreadOrBenchmarkCurveData: '218',
  SettlInstructionsData: '172',
  CommissionData: '12',
  Stipulations: '232',
  MiscFeesGrp: '136',
  ConfirmID: '664',
  ConfirmRefID: '772',
  ConfirmReqID: '859',
  ConfirmTransType: '666',
  ConfirmType: '773',
  CopyMsgIndicator: '797',
  LegalConfirm: '650',
  ConfirmStatus: '665',
  AllocID: '70',
  SecondaryAllocID: '793',
  IndividualAllocID: '467',
  TransactTime: '60',
  TradeDate: '75',
  AllocQty: '80',
  QtyType: '854',
  Side: '54',
  Currency: '15',
  LastMkt: '30',
  AllocAccount: '79',
  AllocAcctIDSource: '661',
  AllocAccountType: '798',
  AvgPx: '6',
  AvgPxPrecision: '74',
  PriceType: '423',
  AvgParPx: '860',
  ReportedPx: '861',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ProcessCode: '81',
  GrossTradeAmt: '381',
  NumDaysInterest: '157',
  ExDate: '230',
  AccruedInterestRate: '158',
  AccruedInterestAmt: '159',
  InterestAtMaturity: '738',
  EndAccruedInterestAmt: '920',
  StartCash: '921',
  EndCash: '922',
  Concession: '238',
  TotalTakedown: '237',
  NetMoney: '118',
  MaturityNetMoney: '890',
  SettlCurrAmt: '119',
  SettlCurrency: '120',
  SettlCurrFxRate: '155',
  SettlCurrFxRateCalc: '156',
  SettlType: '63',
  SettlDate: '64',
  SharedCommission: '858',
};

Confirmation.msgType = 'AK';

module.exports = Confirmation;