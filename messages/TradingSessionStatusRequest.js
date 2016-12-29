var TradSesReqID = require('../fields/TradSesReqID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TradSesMethod = require('../fields/TradSesMethod');
var TradSesMode = require('../fields/TradSesMode');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var SecurityExchange = require('../fields/SecurityExchange');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function TradingSessionStatusRequest (tradingSessionStatusRequest) {
  this.message = tradingSessionStatusRequest;
}

TradingSessionStatusRequest.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionStatusRequest.Tags.TradSesReqID]);
};

TradingSessionStatusRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionStatusRequest.Tags.TradingSessionID]);
};

TradingSessionStatusRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionStatusRequest.Tags.TradingSessionSubID]);
};

TradingSessionStatusRequest.prototype.tradSesMethod = function () {
  return new TradSesMethod(this.message.tags[TradingSessionStatusRequest.Tags.TradSesMethod]);
};

TradingSessionStatusRequest.prototype.tradSesMode = function () {
  return new TradSesMode(this.message.tags[TradingSessionStatusRequest.Tags.TradSesMode]);
};

TradingSessionStatusRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradingSessionStatusRequest.Tags.SubscriptionRequestType]);
};

TradingSessionStatusRequest.prototype.securityExchange = function () {
  return new SecurityExchange(this.message.tags[TradingSessionStatusRequest.Tags.SecurityExchange]);
};

TradingSessionStatusRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradingSessionStatusRequest.Tags.MarketID]);
};

TradingSessionStatusRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradingSessionStatusRequest.Tags.MarketSegmentID]);
};

TradingSessionStatusRequest.Tags = {
  TradSesReqID: '335',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  TradSesMethod: '338',
  TradSesMode: '339',
  SubscriptionRequestType: '263',
  SecurityExchange: '207',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

TradingSessionStatusRequest.msgType = 'g';

module.exports = TradingSessionStatusRequest;