var SettlInstGrp = require('../components/SettlInstGrp');
var SettlInstMsgID = require('../fields/SettlInstMsgID');
var SettlInstReqID = require('../fields/SettlInstReqID');
var SettlInstMode = require('../fields/SettlInstMode');
var SettlInstReqRejCode = require('../fields/SettlInstReqRejCode');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ClOrdID = require('../fields/ClOrdID');
var TransactTime = require('../fields/TransactTime');

function SettlementInstructions (settlementInstructions) {
  this.message = settlementInstructions;
}

SettlementInstructions.prototype.settlInstGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SettlementInstructions.Tags.SettlInstGrp] === undefined) return null;
  return this.message.groups[SettlementInstructions.Tags.SettlInstGrp]
    .map(function (settlInstGrp) {
      return new SettlInstGrp(settlInstGrp);
  });
};

SettlementInstructions.prototype.settlInstMsgId = function () {
  return new SettlInstMsgID(this.message.tags[SettlementInstructions.Tags.SettlInstMsgID]);
};

SettlementInstructions.prototype.settlInstReqId = function () {
  return new SettlInstReqID(this.message.tags[SettlementInstructions.Tags.SettlInstReqID]);
};

SettlementInstructions.prototype.settlInstMode = function () {
  return new SettlInstMode(this.message.tags[SettlementInstructions.Tags.SettlInstMode]);
};

SettlementInstructions.prototype.settlInstReqRejCode = function () {
  return new SettlInstReqRejCode(this.message.tags[SettlementInstructions.Tags.SettlInstReqRejCode]);
};

SettlementInstructions.prototype.text = function () {
  return new Text(this.message.tags[SettlementInstructions.Tags.Text]);
};

SettlementInstructions.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SettlementInstructions.Tags.EncodedTextLen]);
};

SettlementInstructions.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SettlementInstructions.Tags.EncodedText]);
};

SettlementInstructions.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[SettlementInstructions.Tags.ClOrdID]);
};

SettlementInstructions.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SettlementInstructions.Tags.TransactTime]);
};

SettlementInstructions.Tags = {
  SettlInstGrp: '778',
  SettlInstMsgID: '777',
  SettlInstReqID: '791',
  SettlInstMode: '160',
  SettlInstReqRejCode: '792',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ClOrdID: '11',
  TransactTime: '60',
};

SettlementInstructions.msgType = 'T';

module.exports = SettlementInstructions;