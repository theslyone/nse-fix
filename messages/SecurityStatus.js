var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityStatusReqID = require('../fields/SecurityStatusReqID');
var Currency = require('../fields/Currency');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var SecurityTradingStatus = require('../fields/SecurityTradingStatus');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var HaltReasonChar = require('../fields/HaltReasonChar');
var InViewOfCommon = require('../fields/InViewOfCommon');
var DueToRelated = require('../fields/DueToRelated');
var BuyVolume = require('../fields/BuyVolume');
var SellVolume = require('../fields/SellVolume');
var HighPx = require('../fields/HighPx');
var LowPx = require('../fields/LowPx');
var LastPx = require('../fields/LastPx');
var TransactTime = require('../fields/TransactTime');
var Adjustment = require('../fields/Adjustment');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var FirstPx = require('../fields/FirstPx');
var SecurityTradingEvent = require('../fields/SecurityTradingEvent');
var MDBookType = require('../fields/MDBookType');
var MarketDepth = require('../fields/MarketDepth');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function SecurityStatus (securityStatus) {
  this.message = securityStatus;
}

SecurityStatus.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityStatus.Tags.Instrument] === undefined) return null;
  return this.message.groups[SecurityStatus.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityStatus.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityStatus.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[SecurityStatus.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityStatus.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityStatus.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[SecurityStatus.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityStatus.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityStatus.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[SecurityStatus.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityStatus.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityStatus.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityStatus.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityStatus.prototype.securityStatusReqId = function () {
  return new SecurityStatusReqID(this.message.tags[SecurityStatus.Tags.SecurityStatusReqID]);
};

SecurityStatus.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityStatus.Tags.Currency]);
};

SecurityStatus.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityStatus.Tags.TradingSessionID]);
};

SecurityStatus.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityStatus.Tags.TradingSessionSubID]);
};

SecurityStatus.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[SecurityStatus.Tags.UnsolicitedIndicator]);
};

SecurityStatus.prototype.securityTradingStatus = function () {
  return new SecurityTradingStatus(this.message.tags[SecurityStatus.Tags.SecurityTradingStatus]);
};

SecurityStatus.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[SecurityStatus.Tags.FinancialStatus]);
};

SecurityStatus.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityStatus.Tags.CorporateAction]);
};

SecurityStatus.prototype.haltReasonChar = function () {
  return new HaltReasonChar(this.message.tags[SecurityStatus.Tags.HaltReasonChar]);
};

SecurityStatus.prototype.inViewOfCommon = function () {
  return new InViewOfCommon(this.message.tags[SecurityStatus.Tags.InViewOfCommon]);
};

SecurityStatus.prototype.dueToRelated = function () {
  return new DueToRelated(this.message.tags[SecurityStatus.Tags.DueToRelated]);
};

SecurityStatus.prototype.buyVolume = function () {
  return new BuyVolume(this.message.tags[SecurityStatus.Tags.BuyVolume]);
};

SecurityStatus.prototype.sellVolume = function () {
  return new SellVolume(this.message.tags[SecurityStatus.Tags.SellVolume]);
};

SecurityStatus.prototype.highPx = function () {
  return new HighPx(this.message.tags[SecurityStatus.Tags.HighPx]);
};

SecurityStatus.prototype.lowPx = function () {
  return new LowPx(this.message.tags[SecurityStatus.Tags.LowPx]);
};

SecurityStatus.prototype.lastPx = function () {
  return new LastPx(this.message.tags[SecurityStatus.Tags.LastPx]);
};

SecurityStatus.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityStatus.Tags.TransactTime]);
};

SecurityStatus.prototype.adjustment = function () {
  return new Adjustment(this.message.tags[SecurityStatus.Tags.Adjustment]);
};

SecurityStatus.prototype.text = function () {
  return new Text(this.message.tags[SecurityStatus.Tags.Text]);
};

SecurityStatus.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityStatus.Tags.EncodedTextLen]);
};

SecurityStatus.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityStatus.Tags.EncodedText]);
};

SecurityStatus.prototype.firstPx = function () {
  return new FirstPx(this.message.tags[SecurityStatus.Tags.FirstPx]);
};

SecurityStatus.prototype.securityTradingEvent = function () {
  return new SecurityTradingEvent(this.message.tags[SecurityStatus.Tags.SecurityTradingEvent]);
};

SecurityStatus.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[SecurityStatus.Tags.MDBookType]);
};

SecurityStatus.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[SecurityStatus.Tags.MarketDepth]);
};

SecurityStatus.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityStatus.Tags.MarketID]);
};

SecurityStatus.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityStatus.Tags.MarketSegmentID]);
};

SecurityStatus.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  ApplicationSequenceControl: '1180',
  SecurityStatusReqID: '324',
  Currency: '15',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  UnsolicitedIndicator: '325',
  SecurityTradingStatus: '326',
  FinancialStatus: '291',
  CorporateAction: '292',
  HaltReasonChar: '327',
  InViewOfCommon: '328',
  DueToRelated: '329',
  BuyVolume: '330',
  SellVolume: '331',
  HighPx: '332',
  LowPx: '333',
  LastPx: '31',
  TransactTime: '60',
  Adjustment: '334',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  FirstPx: '1025',
  SecurityTradingEvent: '1174',
  MDBookType: '1021',
  MarketDepth: '264',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

SecurityStatus.msgType = 'f';

module.exports = SecurityStatus;