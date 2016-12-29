var NoHops = require('../fields/NoHops');
var HopCompID = require('../fields/HopCompID');
var HopSendingTime = require('../fields/HopSendingTime');
var HopRefID = require('../fields/HopRefID');

function HopGrp (hopGrp) {
  this.message = hopGrp;
}

/* group */

/* field */
HopGrp.prototype.hopCompId = function () {
  return new HopCompID(this.message.tags[HopCompID.Tag]);
};

/* field */
HopGrp.prototype.hopSendingTime = function () {
  return new HopSendingTime(this.message.tags[HopSendingTime.Tag]);
};

/* field */
HopGrp.prototype.hopRefId = function () {
  return new HopRefID(this.message.tags[HopRefID.Tag]);
};

/* end group */

HopGrp.Tag = '627';

module.exports = HopGrp;