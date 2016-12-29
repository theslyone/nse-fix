var Parties = require('../components/Parties');
var QuotSetGrp = require('../components/QuotSetGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteType = require('../fields/QuoteType');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DefBidSize = require('../fields/DefBidSize');
var DefOfferSize = require('../fields/DefOfferSize');

function MassQuote (massQuote) {
  this.message = massQuote;
}

MassQuote.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassQuote.Tags.Parties] === undefined) return null;
  return this.message.groups[MassQuote.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassQuote.prototype.quotSetGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassQuote.Tags.QuotSetGrp] === undefined) return null;
  return this.message.groups[MassQuote.Tags.QuotSetGrp]
    .map(function (quotSetGrp) {
      return new QuotSetGrp(quotSetGrp);
  });
};

MassQuote.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[MassQuote.Tags.QuoteReqID]);
};

MassQuote.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[MassQuote.Tags.QuoteID]);
};

MassQuote.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[MassQuote.Tags.QuoteType]);
};

MassQuote.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[MassQuote.Tags.QuoteResponseLevel]);
};

MassQuote.prototype.account = function () {
  return new Account(this.message.tags[MassQuote.Tags.Account]);
};

MassQuote.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassQuote.Tags.AcctIDSource]);
};

MassQuote.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassQuote.Tags.AccountType]);
};

MassQuote.prototype.defBidSize = function () {
  return new DefBidSize(this.message.tags[MassQuote.Tags.DefBidSize]);
};

MassQuote.prototype.defOfferSize = function () {
  return new DefOfferSize(this.message.tags[MassQuote.Tags.DefOfferSize]);
};

MassQuote.Tags = {
  Parties: '453',
  QuotSetGrp: '296',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteType: '537',
  QuoteResponseLevel: '301',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  DefBidSize: '293',
  DefOfferSize: '294',
};

MassQuote.msgType = 'i';

module.exports = MassQuote;