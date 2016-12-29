var Parties = require('../components/Parties');
var AllocAckGrp = require('../components/AllocAckGrp');
var AllocReportID = require('../fields/AllocReportID');
var AllocID = require('../fields/AllocID');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var AllocStatus = require('../fields/AllocStatus');
var AllocRejCode = require('../fields/AllocRejCode');
var AllocReportType = require('../fields/AllocReportType');
var AllocIntermedReqType = require('../fields/AllocIntermedReqType');
var MatchStatus = require('../fields/MatchStatus');
var Product = require('../fields/Product');
var SecurityType = require('../fields/SecurityType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var Quantity = require('../fields/Quantity');
var AllocTransType = require('../fields/AllocTransType');

function AllocationReportAck (allocationReportAck) {
  this.message = allocationReportAck;
}

AllocationReportAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReportAck.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationReportAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationReportAck.prototype.allocAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationReportAck.Tags.AllocAckGrp] === undefined) return null;
  return this.message.groups[AllocationReportAck.Tags.AllocAckGrp]
    .map(function (allocAckGrp) {
      return new AllocAckGrp(allocAckGrp);
  });
};

AllocationReportAck.prototype.allocReportId = function () {
  return new AllocReportID(this.message.tags[AllocationReportAck.Tags.AllocReportID]);
};

AllocationReportAck.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationReportAck.Tags.AllocID]);
};

AllocationReportAck.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationReportAck.Tags.SecondaryAllocID]);
};

AllocationReportAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationReportAck.Tags.TradeDate]);
};

AllocationReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationReportAck.Tags.TransactTime]);
};

AllocationReportAck.prototype.allocStatus = function () {
  return new AllocStatus(this.message.tags[AllocationReportAck.Tags.AllocStatus]);
};

AllocationReportAck.prototype.allocRejCode = function () {
  return new AllocRejCode(this.message.tags[AllocationReportAck.Tags.AllocRejCode]);
};

AllocationReportAck.prototype.allocReportType = function () {
  return new AllocReportType(this.message.tags[AllocationReportAck.Tags.AllocReportType]);
};

AllocationReportAck.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationReportAck.Tags.AllocIntermedReqType]);
};

AllocationReportAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[AllocationReportAck.Tags.MatchStatus]);
};

AllocationReportAck.prototype.product = function () {
  return new Product(this.message.tags[AllocationReportAck.Tags.Product]);
};

AllocationReportAck.prototype.securityType = function () {
  return new SecurityType(this.message.tags[AllocationReportAck.Tags.SecurityType]);
};

AllocationReportAck.prototype.text = function () {
  return new Text(this.message.tags[AllocationReportAck.Tags.Text]);
};

AllocationReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationReportAck.Tags.EncodedTextLen]);
};

AllocationReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationReportAck.Tags.EncodedText]);
};

AllocationReportAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AllocationReportAck.Tags.ClearingBusinessDate]);
};

AllocationReportAck.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AllocationReportAck.Tags.AvgPxIndicator]);
};

AllocationReportAck.prototype.quantity = function () {
  return new Quantity(this.message.tags[AllocationReportAck.Tags.Quantity]);
};

AllocationReportAck.prototype.allocTransType = function () {
  return new AllocTransType(this.message.tags[AllocationReportAck.Tags.AllocTransType]);
};

AllocationReportAck.Tags = {
  Parties: '453',
  AllocAckGrp: '78',
  AllocReportID: '755',
  AllocID: '70',
  SecondaryAllocID: '793',
  TradeDate: '75',
  TransactTime: '60',
  AllocStatus: '87',
  AllocRejCode: '88',
  AllocReportType: '794',
  AllocIntermedReqType: '808',
  MatchStatus: '573',
  Product: '460',
  SecurityType: '167',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ClearingBusinessDate: '715',
  AvgPxIndicator: '819',
  Quantity: '53',
  AllocTransType: '71',
};

AllocationReportAck.msgType = 'AT';

module.exports = AllocationReportAck;