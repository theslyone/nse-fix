var SecListGrp = require('../components/SecListGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');
var SecurityReportID = require('../fields/SecurityReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function SecurityList (securityList) {
  this.message = securityList;
}

SecurityList.prototype.secListGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityList.Tags.SecListGrp] === undefined) return null;
  return this.message.groups[SecurityList.Tags.SecListGrp]
    .map(function (secListGrp) {
      return new SecListGrp(secListGrp);
  });
};

SecurityList.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityList.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityList.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityList.Tags.SecurityReqID]);
};

SecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityList.Tags.SecurityResponseID]);
};

SecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityList.Tags.SecurityRequestResult]);
};

SecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[SecurityList.Tags.TotNoRelatedSym]);
};

SecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityList.Tags.LastFragment]);
};

SecurityList.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityList.Tags.SecurityReportID]);
};

SecurityList.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityList.Tags.ClearingBusinessDate]);
};

SecurityList.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityList.Tags.MarketID]);
};

SecurityList.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityList.Tags.MarketSegmentID]);
};

SecurityList.Tags = {
  SecListGrp: '146',
  ApplicationSequenceControl: '1180',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  LastFragment: '893',
  SecurityReportID: '964',
  ClearingBusinessDate: '715',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

SecurityList.msgType = 'y';

module.exports = SecurityList;