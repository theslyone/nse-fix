var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var OrderQtyData = require('../components/OrderQtyData');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var ClOrdID = require('../fields/ClOrdID');
var ExecAckStatus = require('../fields/ExecAckStatus');
var ExecID = require('../fields/ExecID');
var DKReason = require('../fields/DKReason');
var Side = require('../fields/Side');
var LastQty = require('../fields/LastQty');
var LastPx = require('../fields/LastPx');
var PriceType = require('../fields/PriceType');
var LastParPx = require('../fields/LastParPx');
var CumQty = require('../fields/CumQty');
var AvgPx = require('../fields/AvgPx');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ExecutionAcknowledgement (executionAcknowledgement) {
  this.message = executionAcknowledgement;
}

ExecutionAcknowledgement.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionAcknowledgement.Tags.Instrument] === undefined) return null;
  return this.message.groups[ExecutionAcknowledgement.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

ExecutionAcknowledgement.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionAcknowledgement.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[ExecutionAcknowledgement.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

ExecutionAcknowledgement.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionAcknowledgement.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[ExecutionAcknowledgement.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

ExecutionAcknowledgement.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ExecutionAcknowledgement.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[ExecutionAcknowledgement.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

ExecutionAcknowledgement.prototype.orderId = function () {
  return new OrderID(this.message.tags[ExecutionAcknowledgement.Tags.OrderID]);
};

ExecutionAcknowledgement.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[ExecutionAcknowledgement.Tags.SecondaryOrderID]);
};

ExecutionAcknowledgement.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ExecutionAcknowledgement.Tags.ClOrdID]);
};

ExecutionAcknowledgement.prototype.execAckStatus = function () {
  return new ExecAckStatus(this.message.tags[ExecutionAcknowledgement.Tags.ExecAckStatus]);
};

ExecutionAcknowledgement.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecutionAcknowledgement.Tags.ExecID]);
};

ExecutionAcknowledgement.prototype.dkreason = function () {
  return new DKReason(this.message.tags[ExecutionAcknowledgement.Tags.DKReason]);
};

ExecutionAcknowledgement.prototype.side = function () {
  return new Side(this.message.tags[ExecutionAcknowledgement.Tags.Side]);
};

ExecutionAcknowledgement.prototype.lastQty = function () {
  return new LastQty(this.message.tags[ExecutionAcknowledgement.Tags.LastQty]);
};

ExecutionAcknowledgement.prototype.lastPx = function () {
  return new LastPx(this.message.tags[ExecutionAcknowledgement.Tags.LastPx]);
};

ExecutionAcknowledgement.prototype.priceType = function () {
  return new PriceType(this.message.tags[ExecutionAcknowledgement.Tags.PriceType]);
};

ExecutionAcknowledgement.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[ExecutionAcknowledgement.Tags.LastParPx]);
};

ExecutionAcknowledgement.prototype.cumQty = function () {
  return new CumQty(this.message.tags[ExecutionAcknowledgement.Tags.CumQty]);
};

ExecutionAcknowledgement.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[ExecutionAcknowledgement.Tags.AvgPx]);
};

ExecutionAcknowledgement.prototype.text = function () {
  return new Text(this.message.tags[ExecutionAcknowledgement.Tags.Text]);
};

ExecutionAcknowledgement.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ExecutionAcknowledgement.Tags.EncodedTextLen]);
};

ExecutionAcknowledgement.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ExecutionAcknowledgement.Tags.EncodedText]);
};

ExecutionAcknowledgement.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  OrderQtyData: '38',
  OrderID: '37',
  SecondaryOrderID: '198',
  ClOrdID: '11',
  ExecAckStatus: '1036',
  ExecID: '17',
  DKReason: '127',
  Side: '54',
  LastQty: '32',
  LastPx: '31',
  PriceType: '423',
  LastParPx: '669',
  CumQty: '14',
  AvgPx: '6',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ExecutionAcknowledgement.msgType = 'BN';

module.exports = ExecutionAcknowledgement;