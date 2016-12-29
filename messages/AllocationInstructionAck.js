var Parties = require('../components/Parties');
var AllocAckGrp = require('../components/AllocAckGrp');
var AllocID = require('../fields/AllocID');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var AllocStatus = require('../fields/AllocStatus');
var AllocRejCode = require('../fields/AllocRejCode');
var AllocType = require('../fields/AllocType');
var AllocIntermedReqType = require('../fields/AllocIntermedReqType');
var MatchStatus = require('../fields/MatchStatus');
var Product = require('../fields/Product');
var SecurityType = require('../fields/SecurityType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function AllocationInstructionAck (allocationInstructionAck) {
  this.message = allocationInstructionAck;
}

AllocationInstructionAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationInstructionAck.prototype.allocAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.AllocAckGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.AllocAckGrp]
    .map(function (allocAckGrp) {
      return new AllocAckGrp(allocAckGrp);
  });
};

AllocationInstructionAck.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationInstructionAck.Tags.AllocID]);
};

AllocationInstructionAck.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationInstructionAck.Tags.SecondaryAllocID]);
};

AllocationInstructionAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationInstructionAck.Tags.TradeDate]);
};

AllocationInstructionAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationInstructionAck.Tags.TransactTime]);
};

AllocationInstructionAck.prototype.allocStatus = function () {
  return new AllocStatus(this.message.tags[AllocationInstructionAck.Tags.AllocStatus]);
};

AllocationInstructionAck.prototype.allocRejCode = function () {
  return new AllocRejCode(this.message.tags[AllocationInstructionAck.Tags.AllocRejCode]);
};

AllocationInstructionAck.prototype.allocType = function () {
  return new AllocType(this.message.tags[AllocationInstructionAck.Tags.AllocType]);
};

AllocationInstructionAck.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationInstructionAck.Tags.AllocIntermedReqType]);
};

AllocationInstructionAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[AllocationInstructionAck.Tags.MatchStatus]);
};

AllocationInstructionAck.prototype.product = function () {
  return new Product(this.message.tags[AllocationInstructionAck.Tags.Product]);
};

AllocationInstructionAck.prototype.securityType = function () {
  return new SecurityType(this.message.tags[AllocationInstructionAck.Tags.SecurityType]);
};

AllocationInstructionAck.prototype.text = function () {
  return new Text(this.message.tags[AllocationInstructionAck.Tags.Text]);
};

AllocationInstructionAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationInstructionAck.Tags.EncodedTextLen]);
};

AllocationInstructionAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationInstructionAck.Tags.EncodedText]);
};

AllocationInstructionAck.Tags = {
  Parties: '453',
  AllocAckGrp: '78',
  AllocID: '70',
  SecondaryAllocID: '793',
  TradeDate: '75',
  TransactTime: '60',
  AllocStatus: '87',
  AllocRejCode: '88',
  AllocType: '626',
  AllocIntermedReqType: '808',
  MatchStatus: '573',
  Product: '460',
  SecurityType: '167',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

AllocationInstructionAck.msgType = 'P';

module.exports = AllocationInstructionAck;