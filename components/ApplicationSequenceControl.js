var ApplID = require('../fields/ApplID');
var ApplSeqNum = require('../fields/ApplSeqNum');
var ApplLastSeqNum = require('../fields/ApplLastSeqNum');
var ApplResendFlag = require('../fields/ApplResendFlag');

function ApplicationSequenceControl (applicationSequenceControl) {
  this.message = applicationSequenceControl;
}
/* field */
ApplicationSequenceControl.prototype.applId = function () {
  return new ApplID(this.message.tags[ApplID.Tag]);
};

/* field */
ApplicationSequenceControl.prototype.applSeqNum = function () {
  return new ApplSeqNum(this.message.tags[ApplSeqNum.Tag]);
};

/* field */
ApplicationSequenceControl.prototype.applLastSeqNum = function () {
  return new ApplLastSeqNum(this.message.tags[ApplLastSeqNum.Tag]);
};

/* field */
ApplicationSequenceControl.prototype.applResendFlag = function () {
  return new ApplResendFlag(this.message.tags[ApplResendFlag.Tag]);
};



ApplicationSequenceControl.Tag = '1180';

module.exports = ApplicationSequenceControl;