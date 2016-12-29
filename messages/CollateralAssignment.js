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
var SettlInstructionsData = require('../components/SettlInstructionsData');
var CollAsgnID = require('../fields/CollAsgnID');
var CollReqID = require('../fields/CollReqID');
var CollAsgnReason = require('../fields/CollAsgnReason');
var CollAsgnTransType = require('../fields/CollAsgnTransType');
var CollAsgnRefID = require('../fields/CollAsgnRefID');
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

function CollateralAssignment (collateralAssignment) {
  this.message = collateralAssignment;
}

CollateralAssignment.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralAssignment.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralAssignment.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralAssignment.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralAssignment.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralAssignment.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralAssignment.prototype.undInstrmtCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.UndInstrmtCollGrp] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.UndInstrmtCollGrp]
    .map(function (undInstrmtCollGrp) {
      return new UndInstrmtCollGrp(undInstrmtCollGrp);
  });
};

CollateralAssignment.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

CollateralAssignment.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

CollateralAssignment.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CollateralAssignment.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CollateralAssignment.prototype.settlInstructionsData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralAssignment.Tags.SettlInstructionsData] === undefined) return null;
  return this.message.groups[CollateralAssignment.Tags.SettlInstructionsData]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

CollateralAssignment.prototype.collAsgnId = function () {
  return new CollAsgnID(this.message.tags[CollateralAssignment.Tags.CollAsgnID]);
};

CollateralAssignment.prototype.collReqId = function () {
  return new CollReqID(this.message.tags[CollateralAssignment.Tags.CollReqID]);
};

CollateralAssignment.prototype.collAsgnReason = function () {
  return new CollAsgnReason(this.message.tags[CollateralAssignment.Tags.CollAsgnReason]);
};

CollateralAssignment.prototype.collAsgnTransType = function () {
  return new CollAsgnTransType(this.message.tags[CollateralAssignment.Tags.CollAsgnTransType]);
};

CollateralAssignment.prototype.collAsgnRefId = function () {
  return new CollAsgnRefID(this.message.tags[CollateralAssignment.Tags.CollAsgnRefID]);
};

CollateralAssignment.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CollateralAssignment.Tags.TransactTime]);
};

CollateralAssignment.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[CollateralAssignment.Tags.ExpireTime]);
};

CollateralAssignment.prototype.account = function () {
  return new Account(this.message.tags[CollateralAssignment.Tags.Account]);
};

CollateralAssignment.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralAssignment.Tags.AccountType]);
};

CollateralAssignment.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralAssignment.Tags.ClOrdID]);
};

CollateralAssignment.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralAssignment.Tags.OrderID]);
};

CollateralAssignment.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralAssignment.Tags.SecondaryOrderID]);
};

CollateralAssignment.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralAssignment.Tags.SecondaryClOrdID]);
};

CollateralAssignment.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralAssignment.Tags.SettlDate]);
};

CollateralAssignment.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralAssignment.Tags.Quantity]);
};

CollateralAssignment.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralAssignment.Tags.QtyType]);
};

CollateralAssignment.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralAssignment.Tags.Currency]);
};

CollateralAssignment.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[CollateralAssignment.Tags.MarginExcess]);
};

CollateralAssignment.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[CollateralAssignment.Tags.TotalNetValue]);
};

CollateralAssignment.prototype.cashOutstanding = function () {
  return new CashOutstanding(this.message.tags[CollateralAssignment.Tags.CashOutstanding]);
};

CollateralAssignment.prototype.side = function () {
  return new Side(this.message.tags[CollateralAssignment.Tags.Side]);
};

CollateralAssignment.prototype.price = function () {
  return new Price(this.message.tags[CollateralAssignment.Tags.Price]);
};

CollateralAssignment.prototype.priceType = function () {
  return new PriceType(this.message.tags[CollateralAssignment.Tags.PriceType]);
};

CollateralAssignment.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[CollateralAssignment.Tags.AccruedInterestAmt]);
};

CollateralAssignment.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[CollateralAssignment.Tags.EndAccruedInterestAmt]);
};

CollateralAssignment.prototype.startCash = function () {
  return new StartCash(this.message.tags[CollateralAssignment.Tags.StartCash]);
};

CollateralAssignment.prototype.endCash = function () {
  return new EndCash(this.message.tags[CollateralAssignment.Tags.EndCash]);
};

CollateralAssignment.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[CollateralAssignment.Tags.TradingSessionID]);
};

CollateralAssignment.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[CollateralAssignment.Tags.TradingSessionSubID]);
};

CollateralAssignment.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[CollateralAssignment.Tags.SettlSessID]);
};

CollateralAssignment.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[CollateralAssignment.Tags.SettlSessSubID]);
};

CollateralAssignment.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralAssignment.Tags.ClearingBusinessDate]);
};

CollateralAssignment.prototype.text = function () {
  return new Text(this.message.tags[CollateralAssignment.Tags.Text]);
};

CollateralAssignment.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralAssignment.Tags.EncodedTextLen]);
};

CollateralAssignment.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralAssignment.Tags.EncodedText]);
};

CollateralAssignment.Tags = {
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
  SettlInstructionsData: '172',
  CollAsgnID: '902',
  CollReqID: '894',
  CollAsgnReason: '895',
  CollAsgnTransType: '903',
  CollAsgnRefID: '907',
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

CollateralAssignment.msgType = 'AY';

module.exports = CollateralAssignment;