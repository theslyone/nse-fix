var TradSesReqID = require('../fields/TradSesReqID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SecurityExchange = require('../fields/SecurityExchange');
var TradSesMethod = require('../fields/TradSesMethod');
var TradSesMode = require('../fields/TradSesMode');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function TradingSessionListRequest (tradingSessionListRequest) {
  this.message = tradingSessionListRequest;
}

TradingSessionListRequest.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionListRequest.Tags.TradSesReqID]);
};

TradingSessionListRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionListRequest.Tags.TradingSessionID]);
};

TradingSessionListRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionListRequest.Tags.TradingSessionSubID]);
};

TradingSessionListRequest.prototype.securityExchange = function () {
  return new SecurityExchange(this.message.tags[TradingSessionListRequest.Tags.SecurityExchange]);
};

TradingSessionListRequest.prototype.tradSesMethod = function () {
  return new TradSesMethod(this.message.tags[TradingSessionListRequest.Tags.TradSesMethod]);
};

TradingSessionListRequest.prototype.tradSesMode = function () {
  return new TradSesMode(this.message.tags[TradingSessionListRequest.Tags.TradSesMode]);
};

TradingSessionListRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradingSessionListRequest.Tags.SubscriptionRequestType]);
};

TradingSessionListRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradingSessionListRequest.Tags.MarketID]);
};

TradingSessionListRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradingSessionListRequest.Tags.MarketSegmentID]);
};

TradingSessionListRequest.Tags = {
  TradSesReqID: '335',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SecurityExchange: '207',
  TradSesMethod: '338',
  TradSesMode: '339',
  SubscriptionRequestType: '263',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

TradingSessionListRequest.msgType = 'BI';

module.exports = TradingSessionListRequest;