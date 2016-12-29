var TrdSessLstGrp = require('../components/TrdSessLstGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TradSesReqID = require('../fields/TradSesReqID');
var TradSesUpdateAction = require('../fields/TradSesUpdateAction');

function TradingSessionListUpdateReport (tradingSessionListUpdateReport) {
  this.message = tradingSessionListUpdateReport;
}

TradingSessionListUpdateReport.prototype.trdSessLstGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradingSessionListUpdateReport.Tags.TrdSessLstGrp] === undefined) return null;
  return this.message.groups[TradingSessionListUpdateReport.Tags.TrdSessLstGrp]
    .map(function (trdSessLstGrp) {
      return new TrdSessLstGrp(trdSessLstGrp);
  });
};

TradingSessionListUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradingSessionListUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[TradingSessionListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradingSessionListUpdateReport.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionListUpdateReport.Tags.TradSesReqID]);
};

TradingSessionListUpdateReport.prototype.tradSesUpdateAction = function () {
  return new TradSesUpdateAction(this.message.tags[TradingSessionListUpdateReport.Tags.TradSesUpdateAction]);
};

TradingSessionListUpdateReport.Tags = {
  TrdSessLstGrp: '386',
  ApplicationSequenceControl: '1180',
  TradSesReqID: '335',
  TradSesUpdateAction: '1327',
};

TradingSessionListUpdateReport.msgType = 'BS';

module.exports = TradingSessionListUpdateReport;