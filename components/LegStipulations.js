var NoLegStipulations = require('../fields/NoLegStipulations');
var LegStipulationType = require('../fields/LegStipulationType');
var LegStipulationValue = require('../fields/LegStipulationValue');

function LegStipulations (legStipulations) {
  this.message = legStipulations;
}

/* group */

/* field */
LegStipulations.prototype.legStipulationType = function () {
  return new LegStipulationType(this.message.tags[LegStipulationType.Tag]);
};

/* field */
LegStipulations.prototype.legStipulationValue = function () {
  return new LegStipulationValue(this.message.tags[LegStipulationValue.Tag]);
};

/* end group */

LegStipulations.Tag = '683';

module.exports = LegStipulations;