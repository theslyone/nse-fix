var BaseTradingRules = require('../components/BaseTradingRules');
var OrdTypeRules = require('../components/OrdTypeRules');
var TimeInForceRules = require('../components/TimeInForceRules');
var ExecInstRules = require('../components/ExecInstRules');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var MarketReportID = require('../fields/MarketReportID');
var MarketReqID = require('../fields/MarketReqID');
var MarketUpdateAction = require('../fields/MarketUpdateAction');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var MarketSegmentDesc = require('../fields/MarketSegmentDesc');
var EncodedMktSegmDescLen = require('../fields/EncodedMktSegmDescLen');
var EncodedMktSegmDesc = require('../fields/EncodedMktSegmDesc');
var ParentMktSegmID = require('../fields/ParentMktSegmID');
var Currency = require('../fields/Currency');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MarketDefinitionUpdateReport (marketDefinitionUpdateReport) {
  this.message = marketDefinitionUpdateReport;
}

MarketDefinitionUpdateReport.prototype.baseTradingRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinitionUpdateReport.Tags.BaseTradingRules] === undefined) return null;
  return this.message.groups[MarketDefinitionUpdateReport.Tags.BaseTradingRules]
    .map(function (baseTradingRules) {
      return new BaseTradingRules(baseTradingRules);
  });
};

MarketDefinitionUpdateReport.prototype.ordTypeRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinitionUpdateReport.Tags.OrdTypeRules] === undefined) return null;
  return this.message.groups[MarketDefinitionUpdateReport.Tags.OrdTypeRules]
    .map(function (ordTypeRules) {
      return new OrdTypeRules(ordTypeRules);
  });
};

MarketDefinitionUpdateReport.prototype.timeInForceRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinitionUpdateReport.Tags.TimeInForceRules] === undefined) return null;
  return this.message.groups[MarketDefinitionUpdateReport.Tags.TimeInForceRules]
    .map(function (timeInForceRules) {
      return new TimeInForceRules(timeInForceRules);
  });
};

MarketDefinitionUpdateReport.prototype.execInstRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinitionUpdateReport.Tags.ExecInstRules] === undefined) return null;
  return this.message.groups[MarketDefinitionUpdateReport.Tags.ExecInstRules]
    .map(function (execInstRules) {
      return new ExecInstRules(execInstRules);
  });
};

MarketDefinitionUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinitionUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarketDefinitionUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDefinitionUpdateReport.prototype.marketReportId = function () {
  return new MarketReportID(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketReportID]);
};

MarketDefinitionUpdateReport.prototype.marketReqId = function () {
  return new MarketReqID(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketReqID]);
};

MarketDefinitionUpdateReport.prototype.marketUpdateAction = function () {
  return new MarketUpdateAction(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketUpdateAction]);
};

MarketDefinitionUpdateReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketID]);
};

MarketDefinitionUpdateReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketSegmentID]);
};

MarketDefinitionUpdateReport.prototype.marketSegmentDesc = function () {
  return new MarketSegmentDesc(this.message.tags[MarketDefinitionUpdateReport.Tags.MarketSegmentDesc]);
};

MarketDefinitionUpdateReport.prototype.encodedMktSegmDescLen = function () {
  return new EncodedMktSegmDescLen(this.message.tags[MarketDefinitionUpdateReport.Tags.EncodedMktSegmDescLen]);
};

MarketDefinitionUpdateReport.prototype.encodedMktSegmDesc = function () {
  return new EncodedMktSegmDesc(this.message.tags[MarketDefinitionUpdateReport.Tags.EncodedMktSegmDesc]);
};

MarketDefinitionUpdateReport.prototype.parentMktSegmId = function () {
  return new ParentMktSegmID(this.message.tags[MarketDefinitionUpdateReport.Tags.ParentMktSegmID]);
};

MarketDefinitionUpdateReport.prototype.currency = function () {
  return new Currency(this.message.tags[MarketDefinitionUpdateReport.Tags.Currency]);
};

MarketDefinitionUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarketDefinitionUpdateReport.Tags.TransactTime]);
};

MarketDefinitionUpdateReport.prototype.text = function () {
  return new Text(this.message.tags[MarketDefinitionUpdateReport.Tags.Text]);
};

MarketDefinitionUpdateReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarketDefinitionUpdateReport.Tags.EncodedTextLen]);
};

MarketDefinitionUpdateReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarketDefinitionUpdateReport.Tags.EncodedText]);
};

MarketDefinitionUpdateReport.Tags = {
  BaseTradingRules: '1205',
  OrdTypeRules: '1237',
  TimeInForceRules: '1239',
  ExecInstRules: '1232',
  ApplicationSequenceControl: '1180',
  MarketReportID: '1394',
  MarketReqID: '1393',
  MarketUpdateAction: '1395',
  MarketID: '1301',
  MarketSegmentID: '1300',
  MarketSegmentDesc: '1396',
  EncodedMktSegmDescLen: '1397',
  EncodedMktSegmDesc: '1398',
  ParentMktSegmID: '1325',
  Currency: '15',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MarketDefinitionUpdateReport.msgType = 'BV';

module.exports = MarketDefinitionUpdateReport;