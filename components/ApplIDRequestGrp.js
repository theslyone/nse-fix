var NoApplIDs = require('../fields/NoApplIDs');
var RefApplID = require('../fields/RefApplID');
var ApplBegSeqNum = require('../fields/ApplBegSeqNum');
var ApplEndSeqNum = require('../fields/ApplEndSeqNum');

function ApplIDRequestGrp (applIdrequestGrp) {
  this.message = applIdrequestGrp;
}

/* group */

/* field */
ApplIDRequestGrp.prototype.refApplId = function () {
  return new RefApplID(this.message.tags[RefApplID.Tag]);
};

/* field */
ApplIDRequestGrp.prototype.applBegSeqNum = function () {
  return new ApplBegSeqNum(this.message.tags[ApplBegSeqNum.Tag]);
};

/* field */
ApplIDRequestGrp.prototype.applEndSeqNum = function () {
  return new ApplEndSeqNum(this.message.tags[ApplEndSeqNum.Tag]);
};

/* end group */

ApplIDRequestGrp.Tag = '1351';

module.exports = ApplIDRequestGrp;