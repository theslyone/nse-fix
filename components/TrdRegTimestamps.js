var NoTrdRegTimestamps = require('../fields/NoTrdRegTimestamps');
var TrdRegTimestamp = require('../fields/TrdRegTimestamp');
var TrdRegTimestampType = require('../fields/TrdRegTimestampType');
var TrdRegTimestampOrigin = require('../fields/TrdRegTimestampOrigin');
var DeskType = require('../fields/DeskType');
var DeskTypeSource = require('../fields/DeskTypeSource');
var DeskOrderHandlingInst = require('../fields/DeskOrderHandlingInst');

function TrdRegTimestamps (trdRegTimestamps) {
  this.message = trdRegTimestamps;
}

/* group */

/* field */
TrdRegTimestamps.prototype.trdRegTimestamp = function () {
  return new TrdRegTimestamp(this.message.tags[TrdRegTimestamp.Tag]);
};

/* field */
TrdRegTimestamps.prototype.trdRegTimestampType = function () {
  return new TrdRegTimestampType(this.message.tags[TrdRegTimestampType.Tag]);
};

/* field */
TrdRegTimestamps.prototype.trdRegTimestampOrigin = function () {
  return new TrdRegTimestampOrigin(this.message.tags[TrdRegTimestampOrigin.Tag]);
};

/* field */
TrdRegTimestamps.prototype.deskType = function () {
  return new DeskType(this.message.tags[DeskType.Tag]);
};

/* field */
TrdRegTimestamps.prototype.deskTypeSource = function () {
  return new DeskTypeSource(this.message.tags[DeskTypeSource.Tag]);
};

/* field */
TrdRegTimestamps.prototype.deskOrderHandlingInst = function () {
  return new DeskOrderHandlingInst(this.message.tags[DeskOrderHandlingInst.Tag]);
};

/* end group */

TrdRegTimestamps.Tag = '768';

module.exports = TrdRegTimestamps;