var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var PosReqID = require('../fields/PosReqID');
var PosReqType = require('../fields/PosReqType');
var MatchStatus = require('../fields/MatchStatus');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var TransactTime = require('../fields/TransactTime');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlCurrency = require('../fields/SettlCurrency');

function RequestForPositions (requestForPositions) {
  this.message = requestForPositions;
}

RequestForPositions.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositions.Tags.Parties] === undefined) return null;
  return this.message.groups[RequestForPositions.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RequestForPositions.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositions.Tags.Instrument] === undefined) return null;
  return this.message.groups[RequestForPositions.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

RequestForPositions.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositions.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[RequestForPositions.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

RequestForPositions.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositions.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[RequestForPositions.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

RequestForPositions.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RequestForPositions.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[RequestForPositions.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

RequestForPositions.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[RequestForPositions.Tags.PosReqID]);
};

RequestForPositions.prototype.posReqType = function () {
  return new PosReqType(this.message.tags[RequestForPositions.Tags.PosReqType]);
};

RequestForPositions.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[RequestForPositions.Tags.MatchStatus]);
};

RequestForPositions.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[RequestForPositions.Tags.SubscriptionRequestType]);
};

RequestForPositions.prototype.account = function () {
  return new Account(this.message.tags[RequestForPositions.Tags.Account]);
};

RequestForPositions.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[RequestForPositions.Tags.AcctIDSource]);
};

RequestForPositions.prototype.accountType = function () {
  return new AccountType(this.message.tags[RequestForPositions.Tags.AccountType]);
};

RequestForPositions.prototype.currency = function () {
  return new Currency(this.message.tags[RequestForPositions.Tags.Currency]);
};

RequestForPositions.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[RequestForPositions.Tags.ClearingBusinessDate]);
};

RequestForPositions.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[RequestForPositions.Tags.SettlSessID]);
};

RequestForPositions.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[RequestForPositions.Tags.SettlSessSubID]);
};

RequestForPositions.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[RequestForPositions.Tags.TransactTime]);
};

RequestForPositions.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[RequestForPositions.Tags.ResponseTransportType]);
};

RequestForPositions.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[RequestForPositions.Tags.ResponseDestination]);
};

RequestForPositions.prototype.text = function () {
  return new Text(this.message.tags[RequestForPositions.Tags.Text]);
};

RequestForPositions.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[RequestForPositions.Tags.EncodedTextLen]);
};

RequestForPositions.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[RequestForPositions.Tags.EncodedText]);
};

RequestForPositions.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[RequestForPositions.Tags.SettlCurrency]);
};

RequestForPositions.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  TrdgSesGrp: '386',
  PosReqID: '710',
  PosReqType: '724',
  MatchStatus: '573',
  SubscriptionRequestType: '263',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlSessSubID: '717',
  TransactTime: '60',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SettlCurrency: '120',
};

RequestForPositions.msgType = 'AN';

module.exports = RequestForPositions;