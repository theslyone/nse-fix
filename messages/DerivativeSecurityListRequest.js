var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var DerivativeInstrument = require('../components/DerivativeInstrument');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityListRequestType = require('../fields/SecurityListRequestType');
var SecuritySubType = require('../fields/SecuritySubType');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function DerivativeSecurityListRequest (derivativeSecurityListRequest) {
  this.message = derivativeSecurityListRequest;
}

DerivativeSecurityListRequest.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListRequest.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[DerivativeSecurityListRequest.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityListRequest.prototype.derivativeInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListRequest.Tags.DerivativeInstrument] === undefined) return null;
  return this.message.groups[DerivativeSecurityListRequest.Tags.DerivativeInstrument]
    .map(function (derivativeInstrument) {
      return new DerivativeInstrument(derivativeInstrument);
  });
};

DerivativeSecurityListRequest.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityListRequest.Tags.SecurityReqID]);
};

DerivativeSecurityListRequest.prototype.securityListRequestType = function () {
  return new SecurityListRequestType(this.message.tags[DerivativeSecurityListRequest.Tags.SecurityListRequestType]);
};

DerivativeSecurityListRequest.prototype.securitySubType = function () {
  return new SecuritySubType(this.message.tags[DerivativeSecurityListRequest.Tags.SecuritySubType]);
};

DerivativeSecurityListRequest.prototype.currency = function () {
  return new Currency(this.message.tags[DerivativeSecurityListRequest.Tags.Currency]);
};

DerivativeSecurityListRequest.prototype.text = function () {
  return new Text(this.message.tags[DerivativeSecurityListRequest.Tags.Text]);
};

DerivativeSecurityListRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[DerivativeSecurityListRequest.Tags.EncodedTextLen]);
};

DerivativeSecurityListRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[DerivativeSecurityListRequest.Tags.EncodedText]);
};

DerivativeSecurityListRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[DerivativeSecurityListRequest.Tags.TradingSessionID]);
};

DerivativeSecurityListRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[DerivativeSecurityListRequest.Tags.TradingSessionSubID]);
};

DerivativeSecurityListRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[DerivativeSecurityListRequest.Tags.SubscriptionRequestType]);
};

DerivativeSecurityListRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[DerivativeSecurityListRequest.Tags.MarketID]);
};

DerivativeSecurityListRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[DerivativeSecurityListRequest.Tags.MarketSegmentID]);
};

DerivativeSecurityListRequest.Tags = {
  UnderlyingInstrument: '311',
  DerivativeInstrument: '1214',
  SecurityReqID: '320',
  SecurityListRequestType: '559',
  SecuritySubType: '762',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SubscriptionRequestType: '263',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

DerivativeSecurityListRequest.msgType = 'z';

module.exports = DerivativeSecurityListRequest;