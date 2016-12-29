var BaseTradingRules = require('../components/BaseTradingRules');
var OrdTypeRules = require('../components/OrdTypeRules');
var TimeInForceRules = require('../components/TimeInForceRules');
var ExecInstRules = require('../components/ExecInstRules');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var MarketReportID = require('../fields/MarketReportID');
var MarketReqID = require('../fields/MarketReqID');
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

function MarketDefinition (marketDefinition) {
  this.message = marketDefinition;
}

MarketDefinition.prototype.baseTradingRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinition.Tags.BaseTradingRules] === undefined) return null;
  return this.message.groups[MarketDefinition.Tags.BaseTradingRules]
    .map(function (baseTradingRules) {
      return new BaseTradingRules(baseTradingRules);
  });
};

MarketDefinition.prototype.ordTypeRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinition.Tags.OrdTypeRules] === undefined) return null;
  return this.message.groups[MarketDefinition.Tags.OrdTypeRules]
    .map(function (ordTypeRules) {
      return new OrdTypeRules(ordTypeRules);
  });
};

MarketDefinition.prototype.timeInForceRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinition.Tags.TimeInForceRules] === undefined) return null;
  return this.message.groups[MarketDefinition.Tags.TimeInForceRules]
    .map(function (timeInForceRules) {
      return new TimeInForceRules(timeInForceRules);
  });
};

MarketDefinition.prototype.execInstRules = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinition.Tags.ExecInstRules] === undefined) return null;
  return this.message.groups[MarketDefinition.Tags.ExecInstRules]
    .map(function (execInstRules) {
      return new ExecInstRules(execInstRules);
  });
};

MarketDefinition.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDefinition.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarketDefinition.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDefinition.prototype.marketReportId = function () {
  return new MarketReportID(this.message.tags[MarketDefinition.Tags.MarketReportID]);
};

MarketDefinition.prototype.marketReqId = function () {
  return new MarketReqID(this.message.tags[MarketDefinition.Tags.MarketReqID]);
};

MarketDefinition.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDefinition.Tags.MarketID]);
};

MarketDefinition.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDefinition.Tags.MarketSegmentID]);
};

MarketDefinition.prototype.marketSegmentDesc = function () {
  return new MarketSegmentDesc(this.message.tags[MarketDefinition.Tags.MarketSegmentDesc]);
};

MarketDefinition.prototype.encodedMktSegmDescLen = function () {
  return new EncodedMktSegmDescLen(this.message.tags[MarketDefinition.Tags.EncodedMktSegmDescLen]);
};

MarketDefinition.prototype.encodedMktSegmDesc = function () {
  return new EncodedMktSegmDesc(this.message.tags[MarketDefinition.Tags.EncodedMktSegmDesc]);
};

MarketDefinition.prototype.parentMktSegmId = function () {
  return new ParentMktSegmID(this.message.tags[MarketDefinition.Tags.ParentMktSegmID]);
};

MarketDefinition.prototype.currency = function () {
  return new Currency(this.message.tags[MarketDefinition.Tags.Currency]);
};

MarketDefinition.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarketDefinition.Tags.TransactTime]);
};

MarketDefinition.prototype.text = function () {
  return new Text(this.message.tags[MarketDefinition.Tags.Text]);
};

MarketDefinition.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarketDefinition.Tags.EncodedTextLen]);
};

MarketDefinition.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarketDefinition.Tags.EncodedText]);
};

MarketDefinition.Tags = {
  BaseTradingRules: '1205',
  OrdTypeRules: '1237',
  TimeInForceRules: '1239',
  ExecInstRules: '1232',
  ApplicationSequenceControl: '1180',
  MarketReportID: '1394',
  MarketReqID: '1393',
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

MarketDefinition.msgType = 'BU';

module.exports = MarketDefinition;