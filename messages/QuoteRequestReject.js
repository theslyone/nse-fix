var QuotReqRjctGrp = require('../components/QuotReqRjctGrp');
var RootParties = require('../components/RootParties');
var QuoteReqID = require('../fields/QuoteReqID');
var RFQReqID = require('../fields/RFQReqID');
var QuoteRequestRejectReason = require('../fields/QuoteRequestRejectReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var PrivateQuote = require('../fields/PrivateQuote');
var RespondentType = require('../fields/RespondentType');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');

function QuoteRequestReject (quoteRequestReject) {
  this.message = quoteRequestReject;
}

QuoteRequestReject.prototype.quotReqRjctGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequestReject.Tags.QuotReqRjctGrp] === undefined) return null;
  return this.message.groups[QuoteRequestReject.Tags.QuotReqRjctGrp]
    .map(function (quotReqRjctGrp) {
      return new QuotReqRjctGrp(quotReqRjctGrp);
  });
};

QuoteRequestReject.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequestReject.Tags.RootParties] === undefined) return null;
  return this.message.groups[QuoteRequestReject.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

QuoteRequestReject.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteRequestReject.Tags.QuoteReqID]);
};

QuoteRequestReject.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[QuoteRequestReject.Tags.RFQReqID]);
};

QuoteRequestReject.prototype.quoteRequestRejectReason = function () {
  return new QuoteRequestRejectReason(this.message.tags[QuoteRequestReject.Tags.QuoteRequestRejectReason]);
};

QuoteRequestReject.prototype.text = function () {
  return new Text(this.message.tags[QuoteRequestReject.Tags.Text]);
};

QuoteRequestReject.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteRequestReject.Tags.EncodedTextLen]);
};

QuoteRequestReject.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteRequestReject.Tags.EncodedText]);
};

QuoteRequestReject.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[QuoteRequestReject.Tags.PrivateQuote]);
};

QuoteRequestReject.prototype.respondentType = function () {
  return new RespondentType(this.message.tags[QuoteRequestReject.Tags.RespondentType]);
};

QuoteRequestReject.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[QuoteRequestReject.Tags.PreTradeAnonymity]);
};

QuoteRequestReject.Tags = {
  QuotReqRjctGrp: '146',
  RootParties: '1116',
  QuoteReqID: '131',
  RFQReqID: '644',
  QuoteRequestRejectReason: '658',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  PrivateQuote: '1171',
  RespondentType: '1172',
  PreTradeAnonymity: '1091',
};

QuoteRequestReject.msgType = 'AG';

module.exports = QuoteRequestReject;