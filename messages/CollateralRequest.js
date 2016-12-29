var Parties = require('../components/Parties');
var ExecCollGrp = require('../components/ExecCollGrp');
var TrdCollGrp = require('../components/TrdCollGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtCollGrp = require('../components/UndInstrmtCollGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Stipulations = require('../components/Stipulations');
var CollReqID = require('../fields/CollReqID');
var CollAsgnReason = require('../fields/CollAsgnReason');
var TransactTime = require('../fields/TransactTime');
var ExpireTime = require('../fields/ExpireTime');
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

function CollateralRequest (collateralRequest) {
  this.message = collateralRequest;
}

CollateralRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralRequest.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralRequest.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralRequest.prototype.undInstrmtCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.UndInstrmtCollGrp] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.UndInstrmtCollGrp]
    .map(function (undInstrmtCollGrp) {
      return new UndInstrmtCollGrp(undInstrmtCollGrp);
  });
};

CollateralRequest.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

CollateralRequest.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

CollateralRequest.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CollateralRequest.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralRequest.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CollateralRequest.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CollateralRequest.prototype.collReqId = function () {
  return new CollReqID(this.message.tags[CollateralRequest.Tags.CollReqID]);
};

CollateralRequest.prototype.collAsgnReason = function () {
  return new CollAsgnReason(this.message.tags[CollateralRequest.Tags.CollAsgnReason]);
};

CollateralRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CollateralRequest.Tags.TransactTime]);
};

CollateralRequest.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[CollateralRequest.Tags.ExpireTime]);
};

CollateralRequest.prototype.account = function () {
  return new Account(this.message.tags[CollateralRequest.Tags.Account]);
};

CollateralRequest.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralRequest.Tags.AccountType]);
};

CollateralRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralRequest.Tags.ClOrdID]);
};

CollateralRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralRequest.Tags.OrderID]);
};

CollateralRequest.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralRequest.Tags.SecondaryOrderID]);
};

CollateralRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralRequest.Tags.SecondaryClOrdID]);
};

CollateralRequest.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralRequest.Tags.SettlDate]);
};

CollateralRequest.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralRequest.Tags.Quantity]);
};

CollateralRequest.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralRequest.Tags.QtyType]);
};

CollateralRequest.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralRequest.Tags.Currency]);
};

CollateralRequest.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[CollateralRequest.Tags.MarginExcess]);
};

CollateralRequest.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[CollateralRequest.Tags.TotalNetValue]);
};

CollateralRequest.prototype.cashOutstanding = function () {
  return new CashOutstanding(this.message.tags[CollateralRequest.Tags.CashOutstanding]);
};

CollateralRequest.prototype.side = function () {
  return new Side(this.message.tags[CollateralRequest.Tags.Side]);
};

CollateralRequest.prototype.price = function () {
  return new Price(this.message.tags[CollateralRequest.Tags.Price]);
};

CollateralRequest.prototype.priceType = function () {
  return new PriceType(this.message.tags[CollateralRequest.Tags.PriceType]);
};

CollateralRequest.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[CollateralRequest.Tags.AccruedInterestAmt]);
};

CollateralRequest.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[CollateralRequest.Tags.EndAccruedInterestAmt]);
};

CollateralRequest.prototype.startCash = function () {
  return new StartCash(this.message.tags[CollateralRequest.Tags.StartCash]);
};

CollateralRequest.prototype.endCash = function () {
  return new EndCash(this.message.tags[CollateralRequest.Tags.EndCash]);
};

CollateralRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[CollateralRequest.Tags.TradingSessionID]);
};

CollateralRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[CollateralRequest.Tags.TradingSessionSubID]);
};

CollateralRequest.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[CollateralRequest.Tags.SettlSessID]);
};

CollateralRequest.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[CollateralRequest.Tags.SettlSessSubID]);
};

CollateralRequest.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralRequest.Tags.ClearingBusinessDate]);
};

CollateralRequest.prototype.text = function () {
  return new Text(this.message.tags[CollateralRequest.Tags.Text]);
};

CollateralRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralRequest.Tags.EncodedTextLen]);
};

CollateralRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralRequest.Tags.EncodedText]);
};

CollateralRequest.Tags = {
  Parties: '453',
  ExecCollGrp: '124',
  TrdCollGrp: '897',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  UndInstrmtCollGrp: '711',
  TrdRegTimestamps: '768',
  MiscFeesGrp: '136',
  SpreadOrBenchmarkCurveData: '218',
  Stipulations: '232',
  CollReqID: '894',
  CollAsgnReason: '895',
  TransactTime: '60',
  ExpireTime: '126',
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

CollateralRequest.msgType = 'AX';

module.exports = CollateralRequest;