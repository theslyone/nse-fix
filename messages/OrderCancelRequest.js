var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var OrigClOrdID = require('../fields/OrigClOrdID');
var OrderID = require('../fields/OrderID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var ListID = require('../fields/ListID');
var OrigOrdModTime = require('../fields/OrigOrdModTime');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var ComplianceID = require('../fields/ComplianceID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function OrderCancelRequest (orderCancelRequest) {
  this.message = orderCancelRequest;
}

OrderCancelRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderCancelRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderCancelRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderCancelRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderCancelRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[OrderCancelRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

OrderCancelRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[OrderCancelRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

OrderCancelRequest.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelRequest.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[OrderCancelRequest.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

OrderCancelRequest.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrderCancelRequest.Tags.OrigClOrdID]);
};

OrderCancelRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderCancelRequest.Tags.OrderID]);
};

OrderCancelRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderCancelRequest.Tags.ClOrdID]);
};

OrderCancelRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderCancelRequest.Tags.SecondaryClOrdID]);
};

OrderCancelRequest.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[OrderCancelRequest.Tags.ClOrdLinkID]);
};

OrderCancelRequest.prototype.listId = function () {
  return new ListID(this.message.tags[OrderCancelRequest.Tags.ListID]);
};

OrderCancelRequest.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[OrderCancelRequest.Tags.OrigOrdModTime]);
};

OrderCancelRequest.prototype.account = function () {
  return new Account(this.message.tags[OrderCancelRequest.Tags.Account]);
};

OrderCancelRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[OrderCancelRequest.Tags.AcctIDSource]);
};

OrderCancelRequest.prototype.accountType = function () {
  return new AccountType(this.message.tags[OrderCancelRequest.Tags.AccountType]);
};

OrderCancelRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderCancelRequest.Tags.Side]);
};

OrderCancelRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderCancelRequest.Tags.TransactTime]);
};

OrderCancelRequest.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[OrderCancelRequest.Tags.ComplianceID]);
};

OrderCancelRequest.prototype.text = function () {
  return new Text(this.message.tags[OrderCancelRequest.Tags.Text]);
};

OrderCancelRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderCancelRequest.Tags.EncodedTextLen]);
};

OrderCancelRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderCancelRequest.Tags.EncodedText]);
};

OrderCancelRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  OrigClOrdID: '41',
  OrderID: '37',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  ListID: '66',
  OrigOrdModTime: '586',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Side: '54',
  TransactTime: '60',
  ComplianceID: '376',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

OrderCancelRequest.msgType = 'F';

module.exports = OrderCancelRequest;