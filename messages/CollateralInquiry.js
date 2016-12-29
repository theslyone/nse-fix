var CollInqQualGrp = require('../components/CollInqQualGrp');
var Parties = require('../components/Parties');
var ExecCollGrp = require('../components/ExecCollGrp');
var TrdCollGrp = require('../components/TrdCollGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Stipulations = require('../components/Stipulations');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var CollInquiryID = require('../fields/CollInquiryID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
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

function CollateralInquiry (collateralInquiry) {
  this.message = collateralInquiry;
}

CollateralInquiry.prototype.collInqQualGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.CollInqQualGrp] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.CollInqQualGrp]
    .map(function (collInqQualGrp) {
      return new CollInqQualGrp(collInqQualGrp);
  });
};

CollateralInquiry.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralInquiry.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralInquiry.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralInquiry.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralInquiry.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralInquiry.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralInquiry.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CollateralInquiry.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

CollateralInquiry.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CollateralInquiry.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CollateralInquiry.prototype.settlInstructionsData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiry.Tags.SettlInstructionsData] === undefined) return null;
  return this.message.groups[CollateralInquiry.Tags.SettlInstructionsData]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

CollateralInquiry.prototype.collInquiryId = function () {
  return new CollInquiryID(this.message.tags[CollateralInquiry.Tags.CollInquiryID]);
};

CollateralInquiry.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[CollateralInquiry.Tags.SubscriptionRequestType]);
};

CollateralInquiry.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[CollateralInquiry.Tags.ResponseTransportType]);
};

CollateralInquiry.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[CollateralInquiry.Tags.ResponseDestination]);
};

CollateralInquiry.prototype.account = function () {
  return new Account(this.message.tags[CollateralInquiry.Tags.Account]);
};

CollateralInquiry.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralInquiry.Tags.AccountType]);
};

CollateralInquiry.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralInquiry.Tags.ClOrdID]);
};

CollateralInquiry.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralInquiry.Tags.OrderID]);
};

CollateralInquiry.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralInquiry.Tags.SecondaryOrderID]);
};

CollateralInquiry.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralInquiry.Tags.SecondaryClOrdID]);
};

CollateralInquiry.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralInquiry.Tags.SettlDate]);
};

CollateralInquiry.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralInquiry.Tags.Quantity]);
};

CollateralInquiry.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralInquiry.Tags.QtyType]);
};

CollateralInquiry.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralInquiry.Tags.Currency]);
};

CollateralInquiry.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[CollateralInquiry.Tags.MarginExcess]);
};

CollateralInquiry.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[CollateralInquiry.Tags.TotalNetValue]);
};

CollateralInquiry.prototype.cashOutstanding = function () {
  return new CashOutstanding(this.message.tags[CollateralInquiry.Tags.CashOutstanding]);
};

CollateralInquiry.prototype.side = function () {
  return new Side(this.message.tags[CollateralInquiry.Tags.Side]);
};

CollateralInquiry.prototype.price = function () {
  return new Price(this.message.tags[CollateralInquiry.Tags.Price]);
};

CollateralInquiry.prototype.priceType = function () {
  return new PriceType(this.message.tags[CollateralInquiry.Tags.PriceType]);
};

CollateralInquiry.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[CollateralInquiry.Tags.AccruedInterestAmt]);
};

CollateralInquiry.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[CollateralInquiry.Tags.EndAccruedInterestAmt]);
};

CollateralInquiry.prototype.startCash = function () {
  return new StartCash(this.message.tags[CollateralInquiry.Tags.StartCash]);
};

CollateralInquiry.prototype.endCash = function () {
  return new EndCash(this.message.tags[CollateralInquiry.Tags.EndCash]);
};

CollateralInquiry.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[CollateralInquiry.Tags.TradingSessionID]);
};

CollateralInquiry.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[CollateralInquiry.Tags.TradingSessionSubID]);
};

CollateralInquiry.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[CollateralInquiry.Tags.SettlSessID]);
};

CollateralInquiry.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[CollateralInquiry.Tags.SettlSessSubID]);
};

CollateralInquiry.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralInquiry.Tags.ClearingBusinessDate]);
};

CollateralInquiry.prototype.text = function () {
  return new Text(this.message.tags[CollateralInquiry.Tags.Text]);
};

CollateralInquiry.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralInquiry.Tags.EncodedTextLen]);
};

CollateralInquiry.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralInquiry.Tags.EncodedText]);
};

CollateralInquiry.Tags = {
  CollInqQualGrp: '938',
  Parties: '453',
  ExecCollGrp: '124',
  TrdCollGrp: '897',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  TrdRegTimestamps: '768',
  SpreadOrBenchmarkCurveData: '218',
  Stipulations: '232',
  SettlInstructionsData: '172',
  CollInquiryID: '909',
  SubscriptionRequestType: '263',
  ResponseTransportType: '725',
  ResponseDestination: '726',
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
};

CollateralInquiry.msgType = 'BB';

module.exports = CollateralInquiry;