var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var OrderQtyData = require('../components/OrderQtyData');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var ExecID = require('../fields/ExecID');
var DKReason = require('../fields/DKReason');
var Side = require('../fields/Side');
var LastQty = require('../fields/LastQty');
var LastPx = require('../fields/LastPx');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function DontKnowTrade (dontKnowTrade) {
  this.message = dontKnowTrade;
}

DontKnowTrade.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DontKnowTrade.Tags.Instrument] === undefined) return null;
  return this.message.groups[DontKnowTrade.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

DontKnowTrade.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DontKnowTrade.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[DontKnowTrade.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

DontKnowTrade.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DontKnowTrade.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[DontKnowTrade.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

DontKnowTrade.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DontKnowTrade.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[DontKnowTrade.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

DontKnowTrade.prototype.orderId = function () {
  return new OrderID(this.message.tags[DontKnowTrade.Tags.OrderID]);
};

DontKnowTrade.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[DontKnowTrade.Tags.SecondaryOrderID]);
};

DontKnowTrade.prototype.execId = function () {
  return new ExecID(this.message.tags[DontKnowTrade.Tags.ExecID]);
};

DontKnowTrade.prototype.dkreason = function () {
  return new DKReason(this.message.tags[DontKnowTrade.Tags.DKReason]);
};

DontKnowTrade.prototype.side = function () {
  return new Side(this.message.tags[DontKnowTrade.Tags.Side]);
};

DontKnowTrade.prototype.lastQty = function () {
  return new LastQty(this.message.tags[DontKnowTrade.Tags.LastQty]);
};

DontKnowTrade.prototype.lastPx = function () {
  return new LastPx(this.message.tags[DontKnowTrade.Tags.LastPx]);
};

DontKnowTrade.prototype.text = function () {
  return new Text(this.message.tags[DontKnowTrade.Tags.Text]);
};

DontKnowTrade.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[DontKnowTrade.Tags.EncodedTextLen]);
};

DontKnowTrade.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[DontKnowTrade.Tags.EncodedText]);
};

DontKnowTrade.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  OrderQtyData: '38',
  OrderID: '37',
  SecondaryOrderID: '198',
  ExecID: '17',
  DKReason: '127',
  Side: '54',
  LastQty: '32',
  LastPx: '31',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

DontKnowTrade.msgType = 'Q';

module.exports = DontKnowTrade;