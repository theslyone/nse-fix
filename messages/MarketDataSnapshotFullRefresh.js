var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDFullGrp = require('../components/MDFullGrp');
var RoutingGrp = require('../components/RoutingGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var MDReqID = require('../fields/MDReqID');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var NetChgPrevDay = require('../fields/NetChgPrevDay');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');
var MDReportID = require('../fields/MDReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var MDBookType = require('../fields/MDBookType');
var MDFeedType = require('../fields/MDFeedType');
var TradeDate = require('../fields/TradeDate');
var MDSubBookType = require('../fields/MDSubBookType');
var MarketDepth = require('../fields/MarketDepth');
var TotNumReports = require('../fields/TotNumReports');
var RefreshIndicator = require('../fields/RefreshIndicator');

function MarketDataSnapshotFullRefresh (marketDataSnapshotFullRefresh) {
  this.message = marketDataSnapshotFullRefresh;
}

MarketDataSnapshotFullRefresh.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.Instrument] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarketDataSnapshotFullRefresh.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.mdfullGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.MDFullGrp] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.MDFullGrp]
    .map(function (mdfullGrp) {
      return new MDFullGrp(mdfullGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.routingGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.RoutingGrp] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataSnapshotFullRefresh.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDataSnapshotFullRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDReqID]);
};

MarketDataSnapshotFullRefresh.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[MarketDataSnapshotFullRefresh.Tags.FinancialStatus]);
};

MarketDataSnapshotFullRefresh.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[MarketDataSnapshotFullRefresh.Tags.CorporateAction]);
};

MarketDataSnapshotFullRefresh.prototype.netChgPrevDay = function () {
  return new NetChgPrevDay(this.message.tags[MarketDataSnapshotFullRefresh.Tags.NetChgPrevDay]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueDepth]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueResolution]);
};

MarketDataSnapshotFullRefresh.prototype.mdreportId = function () {
  return new MDReportID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDReportID]);
};

MarketDataSnapshotFullRefresh.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ClearingBusinessDate]);
};

MarketDataSnapshotFullRefresh.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDBookType]);
};

MarketDataSnapshotFullRefresh.prototype.mdfeedType = function () {
  return new MDFeedType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDFeedType]);
};

MarketDataSnapshotFullRefresh.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataSnapshotFullRefresh.Tags.TradeDate]);
};

MarketDataSnapshotFullRefresh.prototype.mdsubBookType = function () {
  return new MDSubBookType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDSubBookType]);
};

MarketDataSnapshotFullRefresh.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MarketDepth]);
};

MarketDataSnapshotFullRefresh.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[MarketDataSnapshotFullRefresh.Tags.TotNumReports]);
};

MarketDataSnapshotFullRefresh.prototype.refreshIndicator = function () {
  return new RefreshIndicator(this.message.tags[MarketDataSnapshotFullRefresh.Tags.RefreshIndicator]);
};

MarketDataSnapshotFullRefresh.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  MDFullGrp: '268',
  RoutingGrp: '215',
  ApplicationSequenceControl: '1180',
  MDReqID: '262',
  FinancialStatus: '291',
  CorporateAction: '292',
  NetChgPrevDay: '451',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
  MDReportID: '963',
  ClearingBusinessDate: '715',
  MDBookType: '1021',
  MDFeedType: '1022',
  TradeDate: '75',
  MDSubBookType: '1173',
  MarketDepth: '264',
  TotNumReports: '911',
  RefreshIndicator: '1187',
};

MarketDataSnapshotFullRefresh.msgType = 'W';

module.exports = MarketDataSnapshotFullRefresh;