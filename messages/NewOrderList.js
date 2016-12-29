var ListOrdGrp = require('../components/ListOrdGrp');
var RootParties = require('../components/RootParties');
var ListID = require('../fields/ListID');
var BidID = require('../fields/BidID');
var ClientBidID = require('../fields/ClientBidID');
var ProgRptReqs = require('../fields/ProgRptReqs');
var BidType = require('../fields/BidType');
var ProgPeriodInterval = require('../fields/ProgPeriodInterval');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var ListExecInstType = require('../fields/ListExecInstType');
var ListExecInst = require('../fields/ListExecInst');
var EncodedListExecInstLen = require('../fields/EncodedListExecInstLen');
var EncodedListExecInst = require('../fields/EncodedListExecInst');
var AllowableOneSidednessPct = require('../fields/AllowableOneSidednessPct');
var AllowableOneSidednessValue = require('../fields/AllowableOneSidednessValue');
var AllowableOneSidednessCurr = require('../fields/AllowableOneSidednessCurr');
var TotNoOrders = require('../fields/TotNoOrders');
var LastFragment = require('../fields/LastFragment');
var ContingencyType = require('../fields/ContingencyType');

function NewOrderList (newOrderList) {
  this.message = newOrderList;
}

NewOrderList.prototype.listOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderList.Tags.ListOrdGrp] === undefined) return null;
  return this.message.groups[NewOrderList.Tags.ListOrdGrp]
    .map(function (listOrdGrp) {
      return new ListOrdGrp(listOrdGrp);
  });
};

NewOrderList.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderList.Tags.RootParties] === undefined) return null;
  return this.message.groups[NewOrderList.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

NewOrderList.prototype.listId = function () {
  return new ListID(this.message.tags[NewOrderList.Tags.ListID]);
};

NewOrderList.prototype.bidId = function () {
  return new BidID(this.message.tags[NewOrderList.Tags.BidID]);
};

NewOrderList.prototype.clientBidId = function () {
  return new ClientBidID(this.message.tags[NewOrderList.Tags.ClientBidID]);
};

NewOrderList.prototype.progRptReqs = function () {
  return new ProgRptReqs(this.message.tags[NewOrderList.Tags.ProgRptReqs]);
};

NewOrderList.prototype.bidType = function () {
  return new BidType(this.message.tags[NewOrderList.Tags.BidType]);
};

NewOrderList.prototype.progPeriodInterval = function () {
  return new ProgPeriodInterval(this.message.tags[NewOrderList.Tags.ProgPeriodInterval]);
};

NewOrderList.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[NewOrderList.Tags.CancellationRights]);
};

NewOrderList.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[NewOrderList.Tags.MoneyLaunderingStatus]);
};

NewOrderList.prototype.registId = function () {
  return new RegistID(this.message.tags[NewOrderList.Tags.RegistID]);
};

NewOrderList.prototype.listExecInstType = function () {
  return new ListExecInstType(this.message.tags[NewOrderList.Tags.ListExecInstType]);
};

NewOrderList.prototype.listExecInst = function () {
  return new ListExecInst(this.message.tags[NewOrderList.Tags.ListExecInst]);
};

NewOrderList.prototype.encodedListExecInstLen = function () {
  return new EncodedListExecInstLen(this.message.tags[NewOrderList.Tags.EncodedListExecInstLen]);
};

NewOrderList.prototype.encodedListExecInst = function () {
  return new EncodedListExecInst(this.message.tags[NewOrderList.Tags.EncodedListExecInst]);
};

NewOrderList.prototype.allowableOneSidednessPct = function () {
  return new AllowableOneSidednessPct(this.message.tags[NewOrderList.Tags.AllowableOneSidednessPct]);
};

NewOrderList.prototype.allowableOneSidednessValue = function () {
  return new AllowableOneSidednessValue(this.message.tags[NewOrderList.Tags.AllowableOneSidednessValue]);
};

NewOrderList.prototype.allowableOneSidednessCurr = function () {
  return new AllowableOneSidednessCurr(this.message.tags[NewOrderList.Tags.AllowableOneSidednessCurr]);
};

NewOrderList.prototype.totNoOrders = function () {
  return new TotNoOrders(this.message.tags[NewOrderList.Tags.TotNoOrders]);
};

NewOrderList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[NewOrderList.Tags.LastFragment]);
};

NewOrderList.prototype.contingencyType = function () {
  return new ContingencyType(this.message.tags[NewOrderList.Tags.ContingencyType]);
};

NewOrderList.Tags = {
  ListOrdGrp: '73',
  RootParties: '1116',
  ListID: '66',
  BidID: '390',
  ClientBidID: '391',
  ProgRptReqs: '414',
  BidType: '394',
  ProgPeriodInterval: '415',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  ListExecInstType: '433',
  ListExecInst: '69',
  EncodedListExecInstLen: '352',
  EncodedListExecInst: '353',
  AllowableOneSidednessPct: '765',
  AllowableOneSidednessValue: '766',
  AllowableOneSidednessCurr: '767',
  TotNoOrders: '68',
  LastFragment: '893',
  ContingencyType: '1385',
};

NewOrderList.msgType = 'E';

module.exports = NewOrderList;