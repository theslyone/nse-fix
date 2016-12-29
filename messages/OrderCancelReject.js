var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdID = require('../fields/ClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var OrigClOrdID = require('../fields/OrigClOrdID');
var OrdStatus = require('../fields/OrdStatus');
var WorkingIndicator = require('../fields/WorkingIndicator');
var OrigOrdModTime = require('../fields/OrigOrdModTime');
var ListID = require('../fields/ListID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var CxlRejResponseTo = require('../fields/CxlRejResponseTo');
var CxlRejReason = require('../fields/CxlRejReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function OrderCancelReject (orderCancelReject) {
  this.message = orderCancelReject;
}

OrderCancelReject.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderCancelReject.Tags.OrderID]);
};

OrderCancelReject.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[OrderCancelReject.Tags.SecondaryOrderID]);
};

OrderCancelReject.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderCancelReject.Tags.SecondaryClOrdID]);
};

OrderCancelReject.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderCancelReject.Tags.ClOrdID]);
};

OrderCancelReject.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[OrderCancelReject.Tags.ClOrdLinkID]);
};

OrderCancelReject.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrderCancelReject.Tags.OrigClOrdID]);
};

OrderCancelReject.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[OrderCancelReject.Tags.OrdStatus]);
};

OrderCancelReject.prototype.workingIndicator = function () {
  return new WorkingIndicator(this.message.tags[OrderCancelReject.Tags.WorkingIndicator]);
};

OrderCancelReject.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[OrderCancelReject.Tags.OrigOrdModTime]);
};

OrderCancelReject.prototype.listId = function () {
  return new ListID(this.message.tags[OrderCancelReject.Tags.ListID]);
};

OrderCancelReject.prototype.account = function () {
  return new Account(this.message.tags[OrderCancelReject.Tags.Account]);
};

OrderCancelReject.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[OrderCancelReject.Tags.AcctIDSource]);
};

OrderCancelReject.prototype.accountType = function () {
  return new AccountType(this.message.tags[OrderCancelReject.Tags.AccountType]);
};

OrderCancelReject.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[OrderCancelReject.Tags.TradeOriginationDate]);
};

OrderCancelReject.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[OrderCancelReject.Tags.TradeDate]);
};

OrderCancelReject.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderCancelReject.Tags.TransactTime]);
};

OrderCancelReject.prototype.cxlRejResponseTo = function () {
  return new CxlRejResponseTo(this.message.tags[OrderCancelReject.Tags.CxlRejResponseTo]);
};

OrderCancelReject.prototype.cxlRejReason = function () {
  return new CxlRejReason(this.message.tags[OrderCancelReject.Tags.CxlRejReason]);
};

OrderCancelReject.prototype.text = function () {
  return new Text(this.message.tags[OrderCancelReject.Tags.Text]);
};

OrderCancelReject.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderCancelReject.Tags.EncodedTextLen]);
};

OrderCancelReject.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderCancelReject.Tags.EncodedText]);
};

OrderCancelReject.Tags = {
  OrderID: '37',
  SecondaryOrderID: '198',
  SecondaryClOrdID: '526',
  ClOrdID: '11',
  ClOrdLinkID: '583',
  OrigClOrdID: '41',
  OrdStatus: '39',
  WorkingIndicator: '636',
  OrigOrdModTime: '586',
  ListID: '66',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  TradeOriginationDate: '229',
  TradeDate: '75',
  TransactTime: '60',
  CxlRejResponseTo: '434',
  CxlRejReason: '102',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

OrderCancelReject.msgType = '9';

module.exports = OrderCancelReject;