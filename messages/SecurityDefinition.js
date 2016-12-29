var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var Stipulations = require('../components/Stipulations');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var MarketSegmentGrp = require('../components/MarketSegmentGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityResponseType = require('../fields/SecurityResponseType');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SecurityReportID = require('../fields/SecurityReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var CorporateAction = require('../fields/CorporateAction');

function SecurityDefinition (securityDefinition) {
  this.message = securityDefinition;
}

SecurityDefinition.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.Instrument] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinition.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinition.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinition.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinition.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.Stipulations] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

SecurityDefinition.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

SecurityDefinition.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.YieldData] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

SecurityDefinition.prototype.marketSegmentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.MarketSegmentGrp] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.MarketSegmentGrp]
    .map(function (marketSegmentGrp) {
      return new MarketSegmentGrp(marketSegmentGrp);
  });
};

SecurityDefinition.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinition.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityDefinition.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityDefinition.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinition.Tags.SecurityReqID]);
};

SecurityDefinition.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityDefinition.Tags.SecurityResponseID]);
};

SecurityDefinition.prototype.securityResponseType = function () {
  return new SecurityResponseType(this.message.tags[SecurityDefinition.Tags.SecurityResponseType]);
};

SecurityDefinition.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinition.Tags.Currency]);
};

SecurityDefinition.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinition.Tags.Text]);
};

SecurityDefinition.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinition.Tags.EncodedTextLen]);
};

SecurityDefinition.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinition.Tags.EncodedText]);
};

SecurityDefinition.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityDefinition.Tags.SecurityReportID]);
};

SecurityDefinition.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityDefinition.Tags.ClearingBusinessDate]);
};

SecurityDefinition.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityDefinition.Tags.CorporateAction]);
};

SecurityDefinition.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  Stipulations: '232',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  MarketSegmentGrp: '1310',
  ApplicationSequenceControl: '1180',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityResponseType: '323',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SecurityReportID: '964',
  ClearingBusinessDate: '715',
  CorporateAction: '292',
};

SecurityDefinition.msgType = 'd';

module.exports = SecurityDefinition;