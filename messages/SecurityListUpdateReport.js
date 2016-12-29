var SecLstUpdRelSymGrp = require('../components/SecLstUpdRelSymGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReportID = require('../fields/SecurityReportID');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SecurityUpdateAction = require('../fields/SecurityUpdateAction');
var CorporateAction = require('../fields/CorporateAction');
var LastFragment = require('../fields/LastFragment');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function SecurityListUpdateReport (securityListUpdateReport) {
  this.message = securityListUpdateReport;
}

SecurityListUpdateReport.prototype.secLstUpdRelSymGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListUpdateReport.Tags.SecLstUpdRelSymGrp] === undefined) return null;
  return this.message.groups[SecurityListUpdateReport.Tags.SecLstUpdRelSymGrp]
    .map(function (secLstUpdRelSymGrp) {
      return new SecLstUpdRelSymGrp(secLstUpdRelSymGrp);
  });
};

SecurityListUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityListUpdateReport.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityListUpdateReport.Tags.SecurityReportID]);
};

SecurityListUpdateReport.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityListUpdateReport.Tags.SecurityReqID]);
};

SecurityListUpdateReport.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityListUpdateReport.Tags.SecurityResponseID]);
};

SecurityListUpdateReport.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityListUpdateReport.Tags.SecurityRequestResult]);
};

SecurityListUpdateReport.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[SecurityListUpdateReport.Tags.TotNoRelatedSym]);
};

SecurityListUpdateReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityListUpdateReport.Tags.ClearingBusinessDate]);
};

SecurityListUpdateReport.prototype.securityUpdateAction = function () {
  return new SecurityUpdateAction(this.message.tags[SecurityListUpdateReport.Tags.SecurityUpdateAction]);
};

SecurityListUpdateReport.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityListUpdateReport.Tags.CorporateAction]);
};

SecurityListUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityListUpdateReport.Tags.LastFragment]);
};

SecurityListUpdateReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityListUpdateReport.Tags.MarketID]);
};

SecurityListUpdateReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityListUpdateReport.Tags.MarketSegmentID]);
};

SecurityListUpdateReport.Tags = {
  SecLstUpdRelSymGrp: '146',
  ApplicationSequenceControl: '1180',
  SecurityReportID: '964',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  ClearingBusinessDate: '715',
  SecurityUpdateAction: '980',
  CorporateAction: '292',
  LastFragment: '893',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

SecurityListUpdateReport.msgType = 'BK';

module.exports = SecurityListUpdateReport;