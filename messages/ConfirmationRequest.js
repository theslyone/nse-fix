var OrdAllocGrp = require('../components/OrdAllocGrp');
var ConfirmReqID = require('../fields/ConfirmReqID');
var ConfirmType = require('../fields/ConfirmType');
var AllocID = require('../fields/AllocID');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var IndividualAllocID = require('../fields/IndividualAllocID');
var TransactTime = require('../fields/TransactTime');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocAccountType = require('../fields/AllocAccountType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ConfirmationRequest (confirmationRequest) {
  this.message = confirmationRequest;
}

ConfirmationRequest.prototype.ordAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ConfirmationRequest.Tags.OrdAllocGrp] === undefined) return null;
  return this.message.groups[ConfirmationRequest.Tags.OrdAllocGrp]
    .map(function (ordAllocGrp) {
      return new OrdAllocGrp(ordAllocGrp);
  });
};

ConfirmationRequest.prototype.confirmReqId = function () {
  return new ConfirmReqID(this.message.tags[ConfirmationRequest.Tags.ConfirmReqID]);
};

ConfirmationRequest.prototype.confirmType = function () {
  return new ConfirmType(this.message.tags[ConfirmationRequest.Tags.ConfirmType]);
};

ConfirmationRequest.prototype.allocId = function () {
  return new AllocID(this.message.tags[ConfirmationRequest.Tags.AllocID]);
};

ConfirmationRequest.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[ConfirmationRequest.Tags.SecondaryAllocID]);
};

ConfirmationRequest.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[ConfirmationRequest.Tags.IndividualAllocID]);
};

ConfirmationRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ConfirmationRequest.Tags.TransactTime]);
};

ConfirmationRequest.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[ConfirmationRequest.Tags.AllocAccount]);
};

ConfirmationRequest.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[ConfirmationRequest.Tags.AllocAcctIDSource]);
};

ConfirmationRequest.prototype.allocAccountType = function () {
  return new AllocAccountType(this.message.tags[ConfirmationRequest.Tags.AllocAccountType]);
};

ConfirmationRequest.prototype.text = function () {
  return new Text(this.message.tags[ConfirmationRequest.Tags.Text]);
};

ConfirmationRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ConfirmationRequest.Tags.EncodedTextLen]);
};

ConfirmationRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ConfirmationRequest.Tags.EncodedText]);
};

ConfirmationRequest.Tags = {
  OrdAllocGrp: '73',
  ConfirmReqID: '859',
  ConfirmType: '773',
  AllocID: '70',
  SecondaryAllocID: '793',
  IndividualAllocID: '467',
  TransactTime: '60',
  AllocAccount: '79',
  AllocAcctIDSource: '661',
  AllocAccountType: '798',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ConfirmationRequest.msgType = 'BH';

module.exports = ConfirmationRequest;