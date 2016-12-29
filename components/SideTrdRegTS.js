var NoSideTrdRegTS = require('../fields/NoSideTrdRegTS');
var SideTrdRegTimestamp = require('../fields/SideTrdRegTimestamp');
var SideTrdRegTimestampType = require('../fields/SideTrdRegTimestampType');
var SideTrdRegTimestampSrc = require('../fields/SideTrdRegTimestampSrc');

function SideTrdRegTS (sideTrdRegTs) {
  this.message = sideTrdRegTs;
}

/* group */

/* field */
SideTrdRegTS.prototype.sideTrdRegTimestamp = function () {
  return new SideTrdRegTimestamp(this.message.tags[SideTrdRegTimestamp.Tag]);
};

/* field */
SideTrdRegTS.prototype.sideTrdRegTimestampType = function () {
  return new SideTrdRegTimestampType(this.message.tags[SideTrdRegTimestampType.Tag]);
};

/* field */
SideTrdRegTS.prototype.sideTrdRegTimestampSrc = function () {
  return new SideTrdRegTimestampSrc(this.message.tags[SideTrdRegTimestampSrc.Tag]);
};

/* end group */

SideTrdRegTS.Tag = '1016';

module.exports = SideTrdRegTS;