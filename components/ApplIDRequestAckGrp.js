var NoApplIDs = require('../fields/NoApplIDs');
var RefApplID = require('../fields/RefApplID');
var ApplBegSeqNum = require('../fields/ApplBegSeqNum');
var ApplEndSeqNum = require('../fields/ApplEndSeqNum');
var RefApplLastSeqNum = require('../fields/RefApplLastSeqNum');
var ApplResponseError = require('../fields/ApplResponseError');

function ApplIDRequestAckGrp (applIdrequestAckGrp) {
  this.message = applIdrequestAckGrp;
}

/* group */

/* field */
ApplIDRequestAckGrp.prototype.refApplId = function () {
  return new RefApplID(this.message.tags[RefApplID.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applBegSeqNum = function () {
  return new ApplBegSeqNum(this.message.tags[ApplBegSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applEndSeqNum = function () {
  return new ApplEndSeqNum(this.message.tags[ApplEndSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.refApplLastSeqNum = function () {
  return new RefApplLastSeqNum(this.message.tags[RefApplLastSeqNum.Tag]);
};

/* field */
ApplIDRequestAckGrp.prototype.applResponseError = function () {
  return new ApplResponseError(this.message.tags[ApplResponseError.Tag]);
};

/* end group */

ApplIDRequestAckGrp.Tag = '1351';

module.exports = ApplIDRequestAckGrp;