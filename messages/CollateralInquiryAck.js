var CollInqQualGrp = require('../components/CollInqQualGrp');
var Parties = require('../components/Parties');
var ExecCollGrp = require('../components/ExecCollGrp');
var TrdCollGrp = require('../components/TrdCollGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var CollInquiryID = require('../fields/CollInquiryID');
var CollInquiryStatus = require('../fields/CollInquiryStatus');
var CollInquiryResult = require('../fields/CollInquiryResult');
var TotNumReports = require('../fields/TotNumReports');
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
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function CollateralInquiryAck (collateralInquiryAck) {
  this.message = collateralInquiryAck;
}

CollateralInquiryAck.prototype.collInqQualGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.CollInqQualGrp] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.CollInqQualGrp]
    .map(function (collInqQualGrp) {
      return new CollInqQualGrp(collInqQualGrp);
  });
};

CollateralInquiryAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralInquiryAck.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralInquiryAck.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralInquiryAck.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralInquiryAck.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralInquiryAck.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralInquiryAck.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralInquiryAck.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[CollateralInquiryAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CollateralInquiryAck.prototype.collInquiryId = function () {
  return new CollInquiryID(this.message.tags[CollateralInquiryAck.Tags.CollInquiryID]);
};

CollateralInquiryAck.prototype.collInquiryStatus = function () {
  return new CollInquiryStatus(this.message.tags[CollateralInquiryAck.Tags.CollInquiryStatus]);
};

CollateralInquiryAck.prototype.collInquiryResult = function () {
  return new CollInquiryResult(this.message.tags[CollateralInquiryAck.Tags.CollInquiryResult]);
};

CollateralInquiryAck.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[CollateralInquiryAck.Tags.TotNumReports]);
};

CollateralInquiryAck.prototype.account = function () {
  return new Account(this.message.tags[CollateralInquiryAck.Tags.Account]);
};

CollateralInquiryAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralInquiryAck.Tags.AccountType]);
};

CollateralInquiryAck.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralInquiryAck.Tags.ClOrdID]);
};

CollateralInquiryAck.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralInquiryAck.Tags.OrderID]);
};

CollateralInquiryAck.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralInquiryAck.Tags.SecondaryOrderID]);
};

CollateralInquiryAck.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralInquiryAck.Tags.SecondaryClOrdID]);
};

CollateralInquiryAck.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralInquiryAck.Tags.SettlDate]);
};

CollateralInquiryAck.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralInquiryAck.Tags.Quantity]);
};

CollateralInquiryAck.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralInquiryAck.Tags.QtyType]);
};

CollateralInquiryAck.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralInquiryAck.Tags.Currency]);
};

CollateralInquiryAck.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[CollateralInquiryAck.Tags.TradingSessionID]);
};

CollateralInquiryAck.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[CollateralInquiryAck.Tags.TradingSessionSubID]);
};

CollateralInquiryAck.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[CollateralInquiryAck.Tags.SettlSessID]);
};

CollateralInquiryAck.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[CollateralInquiryAck.Tags.SettlSessSubID]);
};

CollateralInquiryAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralInquiryAck.Tags.ClearingBusinessDate]);
};

CollateralInquiryAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[CollateralInquiryAck.Tags.ResponseTransportType]);
};

CollateralInquiryAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[CollateralInquiryAck.Tags.ResponseDestination]);
};

CollateralInquiryAck.prototype.text = function () {
  return new Text(this.message.tags[CollateralInquiryAck.Tags.Text]);
};

CollateralInquiryAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralInquiryAck.Tags.EncodedTextLen]);
};

CollateralInquiryAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralInquiryAck.Tags.EncodedText]);
};

CollateralInquiryAck.Tags = {
  CollInqQualGrp: '938',
  Parties: '453',
  ExecCollGrp: '124',
  TrdCollGrp: '897',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  CollInquiryID: '909',
  CollInquiryStatus: '945',
  CollInquiryResult: '946',
  TotNumReports: '911',
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
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SettlSessID: '716',
  SettlSessSubID: '717',
  ClearingBusinessDate: '715',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

CollateralInquiryAck.msgType = 'BG';

module.exports = CollateralInquiryAck;