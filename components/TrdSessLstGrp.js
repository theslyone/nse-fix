var NoTradingSessions = require('../fields/NoTradingSessions');
var TradingSessionRules = require('../components/TradingSessionRules');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SecurityExchange = require('../fields/SecurityExchange');
var TradSesMethod = require('../fields/TradSesMethod');
var TradSesMode = require('../fields/TradSesMode');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var TradSesStatus = require('../fields/TradSesStatus');
var TradSesStatusRejReason = require('../fields/TradSesStatusRejReason');
var TradSesStartTime = require('../fields/TradSesStartTime');
var TradSesOpenTime = require('../fields/TradSesOpenTime');
var TradSesPreCloseTime = require('../fields/TradSesPreCloseTime');
var TradSesCloseTime = require('../fields/TradSesCloseTime');
var TradSesEndTime = require('../fields/TradSesEndTime');
var TotalVolumeTraded = require('../fields/TotalVolumeTraded');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionDesc = require('../fields/TradingSessionDesc');

function TrdSessLstGrp (trdSessLstGrp) {
  this.message = trdSessLstGrp;
}

/* group */

/* component */
TrdSessLstGrp.prototype.tradingSessionRules = function () {
  return this.message.groups[TradingSessionRules.Tag]
    .map(function (tradingSessionRules) {
      return new TradingSessionRules(tradingSessionRules);
  });
};

/* field */
TrdSessLstGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
TrdSessLstGrp.prototype.securityExchange = function () {
  return new SecurityExchange(this.message.tags[SecurityExchange.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesMethod = function () {
  return new TradSesMethod(this.message.tags[TradSesMethod.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesMode = function () {
  return new TradSesMode(this.message.tags[TradSesMode.Tag]);
};

/* field */
TrdSessLstGrp.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[UnsolicitedIndicator.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesStatus = function () {
  return new TradSesStatus(this.message.tags[TradSesStatus.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesStatusRejReason = function () {
  return new TradSesStatusRejReason(this.message.tags[TradSesStatusRejReason.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesStartTime = function () {
  return new TradSesStartTime(this.message.tags[TradSesStartTime.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesOpenTime = function () {
  return new TradSesOpenTime(this.message.tags[TradSesOpenTime.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesPreCloseTime = function () {
  return new TradSesPreCloseTime(this.message.tags[TradSesPreCloseTime.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesCloseTime = function () {
  return new TradSesCloseTime(this.message.tags[TradSesCloseTime.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradSesEndTime = function () {
  return new TradSesEndTime(this.message.tags[TradSesEndTime.Tag]);
};

/* field */
TrdSessLstGrp.prototype.totalVolumeTraded = function () {
  return new TotalVolumeTraded(this.message.tags[TotalVolumeTraded.Tag]);
};

/* field */
TrdSessLstGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
TrdSessLstGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
TrdSessLstGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
TrdSessLstGrp.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketID.Tag]);
};

/* field */
TrdSessLstGrp.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketSegmentID.Tag]);
};

/* field */
TrdSessLstGrp.prototype.tradingSessionDesc = function () {
  return new TradingSessionDesc(this.message.tags[TradingSessionDesc.Tag]);
};

/* end group */

TrdSessLstGrp.Tag = '386';

module.exports = TrdSessLstGrp;