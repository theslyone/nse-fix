var NoApplIDs = require('../fields/NoApplIDs');
var RefApplID = require('../fields/RefApplID');
var ApplNewSeqNum = require('../fields/ApplNewSeqNum');
var RefApplLastSeqNum = require('../fields/RefApplLastSeqNum');

function ApplIDReportGrp (applIdreportGrp) {
  this.message = applIdreportGrp;
}

/* group */

/* field */
ApplIDReportGrp.prototype.refApplId = function () {
  return new RefApplID(this.message.tags[RefApplID.Tag]);
};

/* field */
ApplIDReportGrp.prototype.applNewSeqNum = function () {
  return new ApplNewSeqNum(this.message.tags[ApplNewSeqNum.Tag]);
};

/* field */
ApplIDReportGrp.prototype.refApplLastSeqNum = function () {
  return new RefApplLastSeqNum(this.message.tags[RefApplLastSeqNum.Tag]);
};

/* end group */

ApplIDReportGrp.Tag = '1351';

module.exports = ApplIDReportGrp;