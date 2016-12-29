var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderID = require('../fields/OrderID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var OrdStatusReqID = require('../fields/OrdStatusReqID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var Side = require('../fields/Side');

function OrderStatusRequest (orderStatusRequest) {
  this.message = orderStatusRequest;
}

OrderStatusRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderStatusRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderStatusRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderStatusRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderStatusRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderStatusRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderStatusRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderStatusRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[OrderStatusRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

OrderStatusRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderStatusRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[OrderStatusRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

OrderStatusRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderStatusRequest.Tags.OrderID]);
};

OrderStatusRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderStatusRequest.Tags.ClOrdID]);
};

OrderStatusRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderStatusRequest.Tags.SecondaryClOrdID]);
};

OrderStatusRequest.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[OrderStatusRequest.Tags.ClOrdLinkID]);
};

OrderStatusRequest.prototype.ordStatusReqId = function () {
  return new OrdStatusReqID(this.message.tags[OrderStatusRequest.Tags.OrdStatusReqID]);
};

OrderStatusRequest.prototype.account = function () {
  return new Account(this.message.tags[OrderStatusRequest.Tags.Account]);
};

OrderStatusRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[OrderStatusRequest.Tags.AcctIDSource]);
};

OrderStatusRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderStatusRequest.Tags.Side]);
};

OrderStatusRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderID: '37',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  OrdStatusReqID: '790',
  Account: '1',
  AcctIDSource: '660',
  Side: '54',
};

OrderStatusRequest.msgType = 'H';

module.exports = OrderStatusRequest;