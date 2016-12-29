var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosReqID = require('../fields/PosReqID');
var TotalNumPosReports = require('../fields/TotalNumPosReports');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var PosReqResult = require('../fields/PosReqResult');
var PosReqStatus = require('../fields/PosReqStatus');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var PosReqType = require('../fields/PosReqType');
var MatchStatus = require('../fields/MatchStatus');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var SettlCurrency = require('../fields/SettlCurrency');

function RequestForPositionsAck (requestForPositionsAck) {
  this.message = requestForPositionsAck;
}

RequestForPositionsAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositionsAck.Tags.Parties] === undefined) return null;
  return this.message.groups[RequestForPositionsAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RequestForPositionsAck.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositionsAck.Tags.Instrument] === undefined) return null;
  return this.message.groups[RequestForPositionsAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

RequestForPositionsAck.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositionsAck.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[RequestForPositionsAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

RequestForPositionsAck.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositionsAck.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[RequestForPositionsAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

RequestForPositionsAck.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[RequestForPositionsAck.Tags.PosMaintRptID]);
};

RequestForPositionsAck.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[RequestForPositionsAck.Tags.PosReqID]);
};

RequestForPositionsAck.prototype.totalNumPosReports = function () {
  return new TotalNumPosReports(this.message.tags[RequestForPositionsAck.Tags.TotalNumPosReports]);
};

RequestForPositionsAck.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[RequestForPositionsAck.Tags.UnsolicitedIndicator]);
};

RequestForPositionsAck.prototype.posReqResult = function () {
  return new PosReqResult(this.message.tags[RequestForPositionsAck.Tags.PosReqResult]);
};

RequestForPositionsAck.prototype.posReqStatus = function () {
  return new PosReqStatus(this.message.tags[RequestForPositionsAck.Tags.PosReqStatus]);
};

RequestForPositionsAck.prototype.account = function () {
  return new Account(this.message.tags[RequestForPositionsAck.Tags.Account]);
};

RequestForPositionsAck.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[RequestForPositionsAck.Tags.AcctIDSource]);
};

RequestForPositionsAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[RequestForPositionsAck.Tags.AccountType]);
};

RequestForPositionsAck.prototype.currency = function () {
  return new Currency(this.message.tags[RequestForPositionsAck.Tags.Currency]);
};

RequestForPositionsAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[RequestForPositionsAck.Tags.ResponseTransportType]);
};

RequestForPositionsAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[RequestForPositionsAck.Tags.ResponseDestination]);
};

RequestForPositionsAck.prototype.text = function () {
  return new Text(this.message.tags[RequestForPositionsAck.Tags.Text]);
};

RequestForPositionsAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[RequestForPositionsAck.Tags.EncodedTextLen]);
};

RequestForPositionsAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[RequestForPositionsAck.Tags.EncodedText]);
};

RequestForPositionsAck.prototype.posReqType = function () {
  return new PosReqType(this.message.tags[RequestForPositionsAck.Tags.PosReqType]);
};

RequestForPositionsAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[RequestForPositionsAck.Tags.MatchStatus]);
};

RequestForPositionsAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[RequestForPositionsAck.Tags.ClearingBusinessDate]);
};

RequestForPositionsAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[RequestForPositionsAck.Tags.SubscriptionRequestType]);
};

RequestForPositionsAck.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[RequestForPositionsAck.Tags.SettlSessID]);
};

RequestForPositionsAck.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[RequestForPositionsAck.Tags.SettlSessSubID]);
};

RequestForPositionsAck.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[RequestForPositionsAck.Tags.SettlCurrency]);
};

RequestForPositionsAck.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  PosMaintRptID: '721',
  PosReqID: '710',
  TotalNumPosReports: '727',
  UnsolicitedIndicator: '325',
  PosReqResult: '728',
  PosReqStatus: '729',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  PosReqType: '724',
  MatchStatus: '573',
  ClearingBusinessDate: '715',
  SubscriptionRequestType: '263',
  SettlSessID: '716',
  SettlSessSubID: '717',
  SettlCurrency: '120',
};

RequestForPositionsAck.msgType = 'AO';

module.exports = RequestForPositionsAck;