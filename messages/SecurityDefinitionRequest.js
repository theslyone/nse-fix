var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var Stipulations = require('../components/Stipulations');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityRequestType = require('../fields/SecurityRequestType');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var ExpirationCycle = require('../fields/ExpirationCycle');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function SecurityDefinitionRequest (securityDefinitionRequest) {
  this.message = securityDefinitionRequest;
}

SecurityDefinitionRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinitionRequest.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinitionRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinitionRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinitionRequest.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.Stipulations] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

SecurityDefinitionRequest.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

SecurityDefinitionRequest.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityDefinitionRequest.Tags.YieldData] === undefined) return null;
  return this.message.groups[SecurityDefinitionRequest.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

SecurityDefinitionRequest.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinitionRequest.Tags.SecurityReqID]);
};

SecurityDefinitionRequest.prototype.securityRequestType = function () {
  return new SecurityRequestType(this.message.tags[SecurityDefinitionRequest.Tags.SecurityRequestType]);
};

SecurityDefinitionRequest.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinitionRequest.Tags.Currency]);
};

SecurityDefinitionRequest.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinitionRequest.Tags.Text]);
};

SecurityDefinitionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinitionRequest.Tags.EncodedTextLen]);
};

SecurityDefinitionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinitionRequest.Tags.EncodedText]);
};

SecurityDefinitionRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityDefinitionRequest.Tags.TradingSessionID]);
};

SecurityDefinitionRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityDefinitionRequest.Tags.TradingSessionSubID]);
};

SecurityDefinitionRequest.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[SecurityDefinitionRequest.Tags.ExpirationCycle]);
};

SecurityDefinitionRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityDefinitionRequest.Tags.SubscriptionRequestType]);
};

SecurityDefinitionRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityDefinitionRequest.Tags.MarketID]);
};

SecurityDefinitionRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityDefinitionRequest.Tags.MarketSegmentID]);
};

SecurityDefinitionRequest.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  Stipulations: '232',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  SecurityReqID: '320',
  SecurityRequestType: '321',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  ExpirationCycle: '827',
  SubscriptionRequestType: '263',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

SecurityDefinitionRequest.msgType = 'c';

module.exports = SecurityDefinitionRequest;