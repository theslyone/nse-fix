var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var PosUndInstrmtGrp = require('../components/PosUndInstrmtGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosReqID = require('../fields/PosReqID');
var PosReqType = require('../fields/PosReqType');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TotalNumPosReports = require('../fields/TotalNumPosReports');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var PosReqResult = require('../fields/PosReqResult');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var SettlPrice = require('../fields/SettlPrice');
var SettlPriceType = require('../fields/SettlPriceType');
var PriorSettlPrice = require('../fields/PriorSettlPrice');
var RegistStatus = require('../fields/RegistStatus');
var DeliveryDate = require('../fields/DeliveryDate');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MatchStatus = require('../fields/MatchStatus');
var PriceType = require('../fields/PriceType');
var SettlCurrency = require('../fields/SettlCurrency');
var MessageEventSource = require('../fields/MessageEventSource');

function PositionReport (positionReport) {
  this.message = positionReport;
}

PositionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[PositionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[PositionReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

PositionReport.prototype.posUndInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PosUndInstrmtGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PosUndInstrmtGrp]
    .map(function (posUndInstrmtGrp) {
      return new PosUndInstrmtGrp(posUndInstrmtGrp);
  });
};

PositionReport.prototype.positionQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PositionQty] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PositionReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PositionReport.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[PositionReport.Tags.PosMaintRptID]);
};

PositionReport.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[PositionReport.Tags.PosReqID]);
};

PositionReport.prototype.posReqType = function () {
  return new PosReqType(this.message.tags[PositionReport.Tags.PosReqType]);
};

PositionReport.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[PositionReport.Tags.SubscriptionRequestType]);
};

PositionReport.prototype.totalNumPosReports = function () {
  return new TotalNumPosReports(this.message.tags[PositionReport.Tags.TotalNumPosReports]);
};

PositionReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[PositionReport.Tags.UnsolicitedIndicator]);
};

PositionReport.prototype.posReqResult = function () {
  return new PosReqResult(this.message.tags[PositionReport.Tags.PosReqResult]);
};

PositionReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionReport.Tags.ClearingBusinessDate]);
};

PositionReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[PositionReport.Tags.SettlSessID]);
};

PositionReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[PositionReport.Tags.SettlSessSubID]);
};

PositionReport.prototype.account = function () {
  return new Account(this.message.tags[PositionReport.Tags.Account]);
};

PositionReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[PositionReport.Tags.AcctIDSource]);
};

PositionReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[PositionReport.Tags.AccountType]);
};

PositionReport.prototype.currency = function () {
  return new Currency(this.message.tags[PositionReport.Tags.Currency]);
};

PositionReport.prototype.settlPrice = function () {
  return new SettlPrice(this.message.tags[PositionReport.Tags.SettlPrice]);
};

PositionReport.prototype.settlPriceType = function () {
  return new SettlPriceType(this.message.tags[PositionReport.Tags.SettlPriceType]);
};

PositionReport.prototype.priorSettlPrice = function () {
  return new PriorSettlPrice(this.message.tags[PositionReport.Tags.PriorSettlPrice]);
};

PositionReport.prototype.registStatus = function () {
  return new RegistStatus(this.message.tags[PositionReport.Tags.RegistStatus]);
};

PositionReport.prototype.deliveryDate = function () {
  return new DeliveryDate(this.message.tags[PositionReport.Tags.DeliveryDate]);
};

PositionReport.prototype.text = function () {
  return new Text(this.message.tags[PositionReport.Tags.Text]);
};

PositionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionReport.Tags.EncodedTextLen]);
};

PositionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionReport.Tags.EncodedText]);
};

PositionReport.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[PositionReport.Tags.MatchStatus]);
};

PositionReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[PositionReport.Tags.PriceType]);
};

PositionReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[PositionReport.Tags.SettlCurrency]);
};

PositionReport.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[PositionReport.Tags.MessageEventSource]);
};

PositionReport.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  PosUndInstrmtGrp: '711',
  PositionQty: '702',
  PositionAmountData: '753',
  ApplicationSequenceControl: '1180',
  PosMaintRptID: '721',
  PosReqID: '710',
  PosReqType: '724',
  SubscriptionRequestType: '263',
  TotalNumPosReports: '727',
  UnsolicitedIndicator: '325',
  PosReqResult: '728',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlSessSubID: '717',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  SettlPrice: '730',
  SettlPriceType: '731',
  PriorSettlPrice: '734',
  RegistStatus: '506',
  DeliveryDate: '743',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MatchStatus: '573',
  PriceType: '423',
  SettlCurrency: '120',
  MessageEventSource: '1011',
};

PositionReport.msgType = 'AP';

module.exports = PositionReport;