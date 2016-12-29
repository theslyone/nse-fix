var ListID = require('../fields/ListID');
var ClientBidID = require('../fields/ClientBidID');
var BidID = require('../fields/BidID');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ListExecute (listExecute) {
  this.message = listExecute;
}

ListExecute.prototype.listId = function () {
  return new ListID(this.message.tags[ListExecute.Tags.ListID]);
};

ListExecute.prototype.clientBidId = function () {
  return new ClientBidID(this.message.tags[ListExecute.Tags.ClientBidID]);
};

ListExecute.prototype.bidId = function () {
  return new BidID(this.message.tags[ListExecute.Tags.BidID]);
};

ListExecute.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ListExecute.Tags.TransactTime]);
};

ListExecute.prototype.text = function () {
  return new Text(this.message.tags[ListExecute.Tags.Text]);
};

ListExecute.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ListExecute.Tags.EncodedTextLen]);
};

ListExecute.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ListExecute.Tags.EncodedText]);
};

ListExecute.Tags = {
  ListID: '66',
  ClientBidID: '391',
  BidID: '390',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ListExecute.msgType = 'L';

module.exports = ListExecute;