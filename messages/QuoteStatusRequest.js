var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var Parties = require('../components/Parties');
var QuoteStatusReqID = require('../fields/QuoteStatusReqID');
var QuoteID = require('../fields/QuoteID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');

function QuoteStatusRequest (quoteStatusRequest) {
  this.message = quoteStatusRequest;
}

QuoteStatusRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[QuoteStatusRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

QuoteStatusRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[QuoteStatusRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

QuoteStatusRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[QuoteStatusRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

QuoteStatusRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[QuoteStatusRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

QuoteStatusRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteStatusRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteStatusRequest.prototype.quoteStatusReqId = function () {
  return new QuoteStatusReqID(this.message.tags[QuoteStatusRequest.Tags.QuoteStatusReqID]);
};

QuoteStatusRequest.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteStatusRequest.Tags.QuoteID]);
};

QuoteStatusRequest.prototype.account = function () {
  return new Account(this.message.tags[QuoteStatusRequest.Tags.Account]);
};

QuoteStatusRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[QuoteStatusRequest.Tags.AcctIDSource]);
};

QuoteStatusRequest.prototype.accountType = function () {
  return new AccountType(this.message.tags[QuoteStatusRequest.Tags.AccountType]);
};

QuoteStatusRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[QuoteStatusRequest.Tags.TradingSessionID]);
};

QuoteStatusRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[QuoteStatusRequest.Tags.TradingSessionSubID]);
};

QuoteStatusRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[QuoteStatusRequest.Tags.SubscriptionRequestType]);
};

QuoteStatusRequest.Tags = {
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  Parties: '453',
  QuoteStatusReqID: '649',
  QuoteID: '117',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SubscriptionRequestType: '263',
};

QuoteStatusRequest.msgType = 'a';

module.exports = QuoteStatusRequest;