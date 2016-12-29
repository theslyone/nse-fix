var Parties = require('../components/Parties');
var ExecCollGrp = require('../components/ExecCollGrp');
var TrdCollGrp = require('../components/TrdCollGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Stipulations = require('../components/Stipulations');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var CollRptID = require('../fields/CollRptID');
var CollInquiryID = require('../fields/CollInquiryID');
var CollStatus = require('../fields/CollStatus');
var TotNumReports = require('../fields/TotNumReports');
var LastRptRequested = require('../fields/LastRptRequested');
var Account = require('../fields/Account');
var AccountType = require('../fields/AccountType');
var ClOrdID = require('../fields/ClOrdID');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var SettlDate = require('../fields/SettlDate');
var Quantity = require('../fields/Quantity');
var QtyType = require('../fields/QtyType');
var Currency = require('../fields/Currency');
var MarginExcess = require('../fields/MarginExcess');
var TotalNetValue = require('../fields/TotalNetValue');
var CashOutstanding = require('../fields/CashOutstanding');
var Side = require('../fields/Side');
var Price = require('../fields/Price');
var PriceType = require('../fields/PriceType');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TransactTime = require('../fields/TransactTime');
var CollApplType = require('../fields/CollApplType');
var FinancialStatus = require('../fields/FinancialStatus');

function CollateralReport (collateralReport) {
  this.message = collateralReport;
}

CollateralReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralReport.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralReport.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CollateralReport.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

CollateralReport.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

CollateralReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CollateralReport.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CollateralReport.prototype.settlInstructionsData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralReport.Tags.SettlInstructionsData] === undefined) return null;
  return this.message.groups[CollateralReport.Tags.SettlInstructionsData]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

CollateralReport.prototype.collRptId = function () {
  return new CollRptID(this.message.tags[CollateralReport.Tags.CollRptID]);
};

CollateralReport.prototype.collInquiryId = function () {
  return new CollInquiryID(this.message.tags[CollateralReport.Tags.CollInquiryID]);
};

CollateralReport.prototype.collStatus = function () {
  return new CollStatus(this.message.tags[CollateralReport.Tags.CollStatus]);
};

CollateralReport.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[CollateralReport.Tags.TotNumReports]);
};

CollateralReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[CollateralReport.Tags.LastRptRequested]);
};

CollateralReport.prototype.account = function () {
  return new Account(this.message.tags[CollateralReport.Tags.Account]);
};

CollateralReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralReport.Tags.AccountType]);
};

CollateralReport.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralReport.Tags.ClOrdID]);
};

CollateralReport.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralReport.Tags.OrderID]);
};

CollateralReport.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralReport.Tags.SecondaryOrderID]);
};

CollateralReport.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralReport.Tags.SecondaryClOrdID]);
};

CollateralReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralReport.Tags.SettlDate]);
};

CollateralReport.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralReport.Tags.Quantity]);
};

CollateralReport.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralReport.Tags.QtyType]);
};

CollateralReport.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralReport.Tags.Currency]);
};

CollateralReport.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[CollateralReport.Tags.MarginExcess]);
};

CollateralReport.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[CollateralReport.Tags.TotalNetValue]);
};

CollateralReport.prototype.cashOutstanding = function () {
  return new CashOutstanding(this.message.tags[CollateralReport.Tags.CashOutstanding]);
};

CollateralReport.prototype.side = function () {
  return new Side(this.message.tags[CollateralReport.Tags.Side]);
};

CollateralReport.prototype.price = function () {
  return new Price(this.message.tags[CollateralReport.Tags.Price]);
};

CollateralReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[CollateralReport.Tags.PriceType]);
};

CollateralReport.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[CollateralReport.Tags.AccruedInterestAmt]);
};

CollateralReport.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[CollateralReport.Tags.EndAccruedInterestAmt]);
};

CollateralReport.prototype.startCash = function () {
  return new StartCash(this.message.tags[CollateralReport.Tags.StartCash]);
};

CollateralReport.prototype.endCash = function () {
  return new EndCash(this.message.tags[CollateralReport.Tags.EndCash]);
};

CollateralReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[CollateralReport.Tags.TradingSessionID]);
};

CollateralReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[CollateralReport.Tags.TradingSessionSubID]);
};

CollateralReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[CollateralReport.Tags.SettlSessID]);
};

CollateralReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[CollateralReport.Tags.SettlSessSubID]);
};

CollateralReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralReport.Tags.ClearingBusinessDate]);
};

CollateralReport.prototype.text = function () {
  return new Text(this.message.tags[CollateralReport.Tags.Text]);
};

CollateralReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralReport.Tags.EncodedTextLen]);
};

CollateralReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralReport.Tags.EncodedText]);
};

CollateralReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CollateralReport.Tags.TransactTime]);
};

CollateralReport.prototype.collApplType = function () {
  return new CollApplType(this.message.tags[CollateralReport.Tags.CollApplType]);
};

CollateralReport.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[CollateralReport.Tags.FinancialStatus]);
};

CollateralReport.Tags = {
  Parties: '453',
  ExecCollGrp: '124',
  TrdCollGrp: '897',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  TrdRegTimestamps: '768',
  MiscFeesGrp: '136',
  SpreadOrBenchmarkCurveData: '218',
  Stipulations: '232',
  SettlInstructionsData: '172',
  CollRptID: '908',
  CollInquiryID: '909',
  CollStatus: '910',
  TotNumReports: '911',
  LastRptRequested: '912',
  Account: '1',
  AccountType: '581',
  ClOrdID: '11',
  OrderID: '37',
  SecondaryOrderID: '198',
  SecondaryClOrdID: '526',
  SettlDate: '64',
  Quantity: '53',
  QtyType: '854',
  Currency: '15',
  MarginExcess: '899',
  TotalNetValue: '900',
  CashOutstanding: '901',
  Side: '54',
  Price: '44',
  PriceType: '423',
  AccruedInterestAmt: '159',
  EndAccruedInterestAmt: '920',
  StartCash: '921',
  EndCash: '922',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SettlSessID: '716',
  SettlSessSubID: '717',
  ClearingBusinessDate: '715',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TransactTime: '60',
  CollApplType: '1043',
  FinancialStatus: '291',
};

CollateralReport.msgType = 'BA';

module.exports = CollateralReport;