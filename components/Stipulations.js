var NoStipulations = require('../fields/NoStipulations');
var StipulationType = require('../fields/StipulationType');
var StipulationValue = require('../fields/StipulationValue');

function Stipulations (stipulations) {
  this.message = stipulations;
}

/* group */

/* field */
Stipulations.prototype.stipulationType = function () {
  return new StipulationType(this.message.tags[StipulationType.Tag]);
};

/* field */
Stipulations.prototype.stipulationValue = function () {
  return new StipulationValue(this.message.tags[StipulationValue.Tag]);
};

/* end group */

Stipulations.Tag = '232';

module.exports = Stipulations;