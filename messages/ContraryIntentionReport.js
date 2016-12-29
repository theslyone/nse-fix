var Parties = require('../components/Parties');
var ExpirationQty = require('../components/ExpirationQty');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var ContIntRptID = require('../fields/ContIntRptID');
var TransactTime = require('../fields/TransactTime');
var LateIndicator = require('../fields/LateIndicator');
var InputSource = require('../fields/InputSource');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ContraryIntentionReport (contraryIntentionReport) {
  this.message = contraryIntentionReport;
}

ContraryIntentionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ContraryIntentionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[ContraryIntentionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

ContraryIntentionReport.prototype.expirationQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ContraryIntentionReport.Tags.ExpirationQty] === undefined) return null;
  return this.message.groups[ContraryIntentionReport.Tags.ExpirationQty]
    .map(function (expirationQty) {
      return new ExpirationQty(expirationQty);
  });
};

ContraryIntentionReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ContraryIntentionReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[ContraryIntentionReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

ContraryIntentionReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ContraryIntentionReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[ContraryIntentionReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

ContraryIntentionReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ContraryIntentionReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[ContraryIntentionReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

ContraryIntentionReport.prototype.contIntRptId = function () {
  return new ContIntRptID(this.message.tags[ContraryIntentionReport.Tags.ContIntRptID]);
};

ContraryIntentionReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ContraryIntentionReport.Tags.TransactTime]);
};

ContraryIntentionReport.prototype.lateIndicator = function () {
  return new LateIndicator(this.message.tags[ContraryIntentionReport.Tags.LateIndicator]);
};

ContraryIntentionReport.prototype.inputSource = function () {
  return new InputSource(this.message.tags[ContraryIntentionReport.Tags.InputSource]);
};

ContraryIntentionReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[ContraryIntentionReport.Tags.ClearingBusinessDate]);
};

ContraryIntentionReport.prototype.text = function () {
  return new Text(this.message.tags[ContraryIntentionReport.Tags.Text]);
};

ContraryIntentionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ContraryIntentionReport.Tags.EncodedTextLen]);
};

ContraryIntentionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ContraryIntentionReport.Tags.EncodedText]);
};

ContraryIntentionReport.Tags = {
  Parties: '453',
  ExpirationQty: '981',
  Instrument: '55',
  UndInstrmtGrp: '711',
  ApplicationSequenceControl: '1180',
  ContIntRptID: '977',
  TransactTime: '60',
  LateIndicator: '978',
  InputSource: '979',
  ClearingBusinessDate: '715',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ContraryIntentionReport.msgType = 'BO';

module.exports = ContraryIntentionReport;