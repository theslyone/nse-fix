var NoStatsIndicators = require('../fields/NoStatsIndicators');
var StatsType = require('../fields/StatsType');

function StatsIndGrp (statsIndGrp) {
  this.message = statsIndGrp;
}

/* group */

/* field */
StatsIndGrp.prototype.statsType = function () {
  return new StatsType(this.message.tags[StatsType.Tag]);
};

/* end group */

StatsIndGrp.Tag = '1175';

module.exports = StatsIndGrp;