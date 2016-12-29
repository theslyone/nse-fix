var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var InstrumentExtension = require('../components/InstrumentExtension');
var Stipulations = require('../components/Stipulations');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var MarketSegmentGrp = require('../components/MarketSegmentGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReportID = require('../fields/SecurityReportID');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityResponseType = require('../fields/SecurityResponseType');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SecurityUpdateAction = require('../fields/SecurityUpdateAction');
var CorporateAction = require('../fields/CorporateAction');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SecurityDefinitionUpdateReport (securityDefinitionUpdateReport) {
  this.message = securityDefinitionUpdateReport;
}

SecurityDefinitionUpdateReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinitionUpdateReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinitionUpdateReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinitionUpdateReport.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinitionUpdateReport.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.Stipulations] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

SecurityDefinitionUpdateReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

SecurityDefinitionUpdateReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

SecurityDefinitionUpdateReport.prototype.marketSegmentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.MarketSegmentGrp] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.MarketSegmentGrp]
    .map(function (marketSegmentGrp) {
      return new MarketSegmentGrp(marketSegmentGrp);
  });
};

SecurityDefinitionUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityDefinitionUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityDefinitionUpdateReport.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityDefinitionUpdateReport.Tags.SecurityReportID]);
};

SecurityDefinitionUpdateReport.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinitionUpdateReport.Tags.SecurityReqID]);
};

SecurityDefinitionUpdateReport.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityDefinitionUpdateReport.Tags.SecurityResponseID]);
};

SecurityDefinitionUpdateReport.prototype.securityResponseType = function () {
  return new SecurityResponseType(this.message.tags[SecurityDefinitionUpdateReport.Tags.SecurityResponseType]);
};

SecurityDefinitionUpdateReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityDefinitionUpdateReport.Tags.ClearingBusinessDate]);
};

SecurityDefinitionUpdateReport.prototype.securityUpdateAction = function () {
  return new SecurityUpdateAction(this.message.tags[SecurityDefinitionUpdateReport.Tags.SecurityUpdateAction]);
};

SecurityDefinitionUpdateReport.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityDefinitionUpdateReport.Tags.CorporateAction]);
};

SecurityDefinitionUpdateReport.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinitionUpdateReport.Tags.Currency]);
};

SecurityDefinitionUpdateReport.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinitionUpdateReport.Tags.Text]);
};

SecurityDefinitionUpdateReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinitionUpdateReport.Tags.EncodedTextLen]);
};

SecurityDefinitionUpdateReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinitionUpdateReport.Tags.EncodedText]);
};

SecurityDefinitionUpdateReport.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  InstrumentExtension: '668',
  Stipulations: '232',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  MarketSegmentGrp: '1310',
  ApplicationSequenceControl: '1180',
  SecurityReportID: '964',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityResponseType: '323',
  ClearingBusinessDate: '715',
  SecurityUpdateAction: '980',
  CorporateAction: '292',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

SecurityDefinitionUpdateReport.msgType = 'BP';

module.exports = SecurityDefinitionUpdateReport;