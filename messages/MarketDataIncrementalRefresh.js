var MDIncGrp = require('../components/MDIncGrp');
var RoutingGrp = require('../components/RoutingGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var MDReqID = require('../fields/MDReqID');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');
var MDBookType = require('../fields/MDBookType');
var MDFeedType = require('../fields/MDFeedType');
var TradeDate = require('../fields/TradeDate');

function MarketDataIncrementalRefresh (marketDataIncrementalRefresh) {
  this.message = marketDataIncrementalRefresh;
}

MarketDataIncrementalRefresh.prototype.mdincGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataIncrementalRefresh.Tags.MDIncGrp] === undefined) return null;
  return this.message.groups[MarketDataIncrementalRefresh.Tags.MDIncGrp]
    .map(function (mdincGrp) {
      return new MDIncGrp(mdincGrp);
  });
};

MarketDataIncrementalRefresh.prototype.routingGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataIncrementalRefresh.Tags.RoutingGrp] === undefined) return null;
  return this.message.groups[MarketDataIncrementalRefresh.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

MarketDataIncrementalRefresh.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataIncrementalRefresh.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarketDataIncrementalRefresh.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDataIncrementalRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataIncrementalRefresh.Tags.MDReqID]);
};

MarketDataIncrementalRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueDepth]);
};

MarketDataIncrementalRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueResolution]);
};

MarketDataIncrementalRefresh.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[MarketDataIncrementalRefresh.Tags.MDBookType]);
};

MarketDataIncrementalRefresh.prototype.mdfeedType = function () {
  return new MDFeedType(this.message.tags[MarketDataIncrementalRefresh.Tags.MDFeedType]);
};

MarketDataIncrementalRefresh.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataIncrementalRefresh.Tags.TradeDate]);
};

MarketDataIncrementalRefresh.Tags = {
  MDIncGrp: '268',
  RoutingGrp: '215',
  ApplicationSequenceControl: '1180',
  MDReqID: '262',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
  MDBookType: '1021',
  MDFeedType: '1022',
  TradeDate: '75',
};

MarketDataIncrementalRefresh.msgType = 'X';

module.exports = MarketDataIncrementalRefresh;