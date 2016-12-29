var Parties = require('../components/Parties');
var QuotCxlEntriesGrp = require('../components/QuotCxlEntriesGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteCancelType = require('../fields/QuoteCancelType');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var QuoteMsgID = require('../fields/QuoteMsgID');

function QuoteCancel (quoteCancel) {
  this.message = quoteCancel;
}

QuoteCancel.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteCancel.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteCancel.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteCancel.prototype.quotCxlEntriesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteCancel.Tags.QuotCxlEntriesGrp] === undefined) return null;
  return this.message.groups[QuoteCancel.Tags.QuotCxlEntriesGrp]
    .map(function (quotCxlEntriesGrp) {
      return new QuotCxlEntriesGrp(quotCxlEntriesGrp);
  });
};

QuoteCancel.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteCancel.Tags.QuoteReqID]);
};

QuoteCancel.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteCancel.Tags.QuoteID]);
};

QuoteCancel.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[QuoteCancel.Tags.QuoteCancelType]);
};

QuoteCancel.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[QuoteCancel.Tags.QuoteResponseLevel]);
};

QuoteCancel.prototype.account = function () {
  return new Account(this.message.tags[QuoteCancel.Tags.Account]);
};

QuoteCancel.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[QuoteCancel.Tags.AcctIDSource]);
};

QuoteCancel.prototype.accountType = function () {
  return new AccountType(this.message.tags[QuoteCancel.Tags.AccountType]);
};

QuoteCancel.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[QuoteCancel.Tags.TradingSessionID]);
};

QuoteCancel.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[QuoteCancel.Tags.TradingSessionSubID]);
};

QuoteCancel.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[QuoteCancel.Tags.QuoteMsgID]);
};

QuoteCancel.Tags = {
  Parties: '453',
  QuotCxlEntriesGrp: '295',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteCancelType: '298',
  QuoteResponseLevel: '301',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  QuoteMsgID: '1166',
};

QuoteCancel.msgType = 'Z';

module.exports = QuoteCancel;