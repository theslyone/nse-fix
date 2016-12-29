var ApplIDRequestAckGrp = require('../components/ApplIDRequestAckGrp');
var ApplResponseID = require('../fields/ApplResponseID');
var ApplReqID = require('../fields/ApplReqID');
var ApplReqType = require('../fields/ApplReqType');
var ApplResponseType = require('../fields/ApplResponseType');
var ApplTotalMessageCount = require('../fields/ApplTotalMessageCount');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ApplicationMessageRequestAck (applicationMessageRequestAck) {
  this.message = applicationMessageRequestAck;
}

ApplicationMessageRequestAck.prototype.applIdrequestAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ApplicationMessageRequestAck.Tags.ApplIDRequestAckGrp] === undefined) return null;
  return this.message.groups[ApplicationMessageRequestAck.Tags.ApplIDRequestAckGrp]
    .map(function (applIdrequestAckGrp) {
      return new ApplIDRequestAckGrp(applIdrequestAckGrp);
  });
};

ApplicationMessageRequestAck.prototype.applResponseId = function () {
  return new ApplResponseID(this.message.tags[ApplicationMessageRequestAck.Tags.ApplResponseID]);
};

ApplicationMessageRequestAck.prototype.applReqId = function () {
  return new ApplReqID(this.message.tags[ApplicationMessageRequestAck.Tags.ApplReqID]);
};

ApplicationMessageRequestAck.prototype.applReqType = function () {
  return new ApplReqType(this.message.tags[ApplicationMessageRequestAck.Tags.ApplReqType]);
};

ApplicationMessageRequestAck.prototype.applResponseType = function () {
  return new ApplResponseType(this.message.tags[ApplicationMessageRequestAck.Tags.ApplResponseType]);
};

ApplicationMessageRequestAck.prototype.applTotalMessageCount = function () {
  return new ApplTotalMessageCount(this.message.tags[ApplicationMessageRequestAck.Tags.ApplTotalMessageCount]);
};

ApplicationMessageRequestAck.prototype.text = function () {
  return new Text(this.message.tags[ApplicationMessageRequestAck.Tags.Text]);
};

ApplicationMessageRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ApplicationMessageRequestAck.Tags.EncodedTextLen]);
};

ApplicationMessageRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ApplicationMessageRequestAck.Tags.EncodedText]);
};

ApplicationMessageRequestAck.Tags = {
  ApplIDRequestAckGrp: '1351',
  ApplResponseID: '1353',
  ApplReqID: '1346',
  ApplReqType: '1347',
  ApplResponseType: '1348',
  ApplTotalMessageCount: '1349',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ApplicationMessageRequestAck.msgType = 'BX';

module.exports = ApplicationMessageRequestAck;