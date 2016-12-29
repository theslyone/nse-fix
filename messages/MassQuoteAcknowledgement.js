var Parties = require('../components/Parties');
var QuotSetAckGrp = require('../components/QuotSetAckGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteStatus = require('../fields/QuoteStatus');
var QuoteRejectReason = require('../fields/QuoteRejectReason');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var QuoteType = require('../fields/QuoteType');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var QuoteCancelType = require('../fields/QuoteCancelType');

function MassQuoteAcknowledgement (massQuoteAcknowledgement) {
  this.message = massQuoteAcknowledgement;
}

MassQuoteAcknowledgement.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassQuoteAcknowledgement.Tags.Parties] === undefined) return null;
  return this.message.groups[MassQuoteAcknowledgement.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassQuoteAcknowledgement.prototype.quotSetAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassQuoteAcknowledgement.Tags.QuotSetAckGrp] === undefined) return null;
  return this.message.groups[MassQuoteAcknowledgement.Tags.QuotSetAckGrp]
    .map(function (quotSetAckGrp) {
      return new QuotSetAckGrp(quotSetAckGrp);
  });
};

MassQuoteAcknowledgement.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteReqID]);
};

MassQuoteAcknowledgement.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteID]);
};

MassQuoteAcknowledgement.prototype.quoteStatus = function () {
  return new QuoteStatus(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteStatus]);
};

MassQuoteAcknowledgement.prototype.quoteRejectReason = function () {
  return new QuoteRejectReason(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteRejectReason]);
};

MassQuoteAcknowledgement.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteResponseLevel]);
};

MassQuoteAcknowledgement.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteType]);
};

MassQuoteAcknowledgement.prototype.account = function () {
  return new Account(this.message.tags[MassQuoteAcknowledgement.Tags.Account]);
};

MassQuoteAcknowledgement.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassQuoteAcknowledgement.Tags.AcctIDSource]);
};

MassQuoteAcknowledgement.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassQuoteAcknowledgement.Tags.AccountType]);
};

MassQuoteAcknowledgement.prototype.text = function () {
  return new Text(this.message.tags[MassQuoteAcknowledgement.Tags.Text]);
};

MassQuoteAcknowledgement.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MassQuoteAcknowledgement.Tags.EncodedTextLen]);
};

MassQuoteAcknowledgement.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MassQuoteAcknowledgement.Tags.EncodedText]);
};

MassQuoteAcknowledgement.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[MassQuoteAcknowledgement.Tags.QuoteCancelType]);
};

MassQuoteAcknowledgement.Tags = {
  Parties: '453',
  QuotSetAckGrp: '296',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteStatus: '297',
  QuoteRejectReason: '300',
  QuoteResponseLevel: '301',
  QuoteType: '537',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  QuoteCancelType: '298',
};

MassQuoteAcknowledgement.msgType = 'b';

module.exports = MassQuoteAcknowledgement;