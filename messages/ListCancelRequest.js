var Parties = require('../components/Parties');
var ListID = require('../fields/ListID');
var TransactTime = require('../fields/TransactTime');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ListCancelRequest (listCancelRequest) {
  this.message = listCancelRequest;
}

ListCancelRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ListCancelRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[ListCancelRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

ListCancelRequest.prototype.listId = function () {
  return new ListID(this.message.tags[ListCancelRequest.Tags.ListID]);
};

ListCancelRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ListCancelRequest.Tags.TransactTime]);
};

ListCancelRequest.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[ListCancelRequest.Tags.TradeOriginationDate]);
};

ListCancelRequest.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[ListCancelRequest.Tags.TradeDate]);
};

ListCancelRequest.prototype.text = function () {
  return new Text(this.message.tags[ListCancelRequest.Tags.Text]);
};

ListCancelRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ListCancelRequest.Tags.EncodedTextLen]);
};

ListCancelRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ListCancelRequest.Tags.EncodedText]);
};

ListCancelRequest.Tags = {
  Parties: '453',
  ListID: '66',
  TransactTime: '60',
  TradeOriginationDate: '229',
  TradeDate: '75',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ListCancelRequest.msgType = 'K';

module.exports = ListCancelRequest;