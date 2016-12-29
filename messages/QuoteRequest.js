var QuotReqGrp = require('../components/QuotReqGrp');
var RootParties = require('../components/RootParties');
var QuoteReqID = require('../fields/QuoteReqID');
var RFQReqID = require('../fields/RFQReqID');
var ClOrdID = require('../fields/ClOrdID');
var OrderCapacity = require('../fields/OrderCapacity');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var PrivateQuote = require('../fields/PrivateQuote');
var RespondentType = require('../fields/RespondentType');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');

function QuoteRequest (quoteRequest) {
  this.message = quoteRequest;
}

QuoteRequest.prototype.quotReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequest.Tags.QuotReqGrp] === undefined) return null;
  return this.message.groups[QuoteRequest.Tags.QuotReqGrp]
    .map(function (quotReqGrp) {
      return new QuotReqGrp(quotReqGrp);
  });
};

QuoteRequest.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequest.Tags.RootParties] === undefined) return null;
  return this.message.groups[QuoteRequest.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

QuoteRequest.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteRequest.Tags.QuoteReqID]);
};

QuoteRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[QuoteRequest.Tags.RFQReqID]);
};

QuoteRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[QuoteRequest.Tags.ClOrdID]);
};

QuoteRequest.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[QuoteRequest.Tags.OrderCapacity]);
};

QuoteRequest.prototype.text = function () {
  return new Text(this.message.tags[QuoteRequest.Tags.Text]);
};

QuoteRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteRequest.Tags.EncodedTextLen]);
};

QuoteRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteRequest.Tags.EncodedText]);
};

QuoteRequest.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[QuoteRequest.Tags.PrivateQuote]);
};

QuoteRequest.prototype.respondentType = function () {
  return new RespondentType(this.message.tags[QuoteRequest.Tags.RespondentType]);
};

QuoteRequest.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[QuoteRequest.Tags.PreTradeAnonymity]);
};

QuoteRequest.Tags = {
  QuotReqGrp: '146',
  RootParties: '1116',
  QuoteReqID: '131',
  RFQReqID: '644',
  ClOrdID: '11',
  OrderCapacity: '528',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  PrivateQuote: '1171',
  RespondentType: '1172',
  PreTradeAnonymity: '1091',
};

QuoteRequest.msgType = 'R';

module.exports = QuoteRequest;