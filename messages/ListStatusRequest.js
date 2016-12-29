var ListID = require('../fields/ListID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ListStatusRequest (listStatusRequest) {
  this.message = listStatusRequest;
}

ListStatusRequest.prototype.listId = function () {
  return new ListID(this.message.tags[ListStatusRequest.Tags.ListID]);
};

ListStatusRequest.prototype.text = function () {
  return new Text(this.message.tags[ListStatusRequest.Tags.Text]);
};

ListStatusRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ListStatusRequest.Tags.EncodedTextLen]);
};

ListStatusRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ListStatusRequest.Tags.EncodedText]);
};

ListStatusRequest.Tags = {
  ListID: '66',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ListStatusRequest.msgType = 'M';

module.exports = ListStatusRequest;