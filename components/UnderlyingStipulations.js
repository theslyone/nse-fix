var NoUnderlyingStips = require('../fields/NoUnderlyingStips');
var UnderlyingStipType = require('../fields/UnderlyingStipType');
var UnderlyingStipValue = require('../fields/UnderlyingStipValue');

function UnderlyingStipulations (underlyingStipulations) {
  this.message = underlyingStipulations;
}

/* group */

/* field */
UnderlyingStipulations.prototype.underlyingStipType = function () {
  return new UnderlyingStipType(this.message.tags[UnderlyingStipType.Tag]);
};

/* field */
UnderlyingStipulations.prototype.underlyingStipValue = function () {
  return new UnderlyingStipValue(this.message.tags[UnderlyingStipValue.Tag]);
};

/* end group */

UnderlyingStipulations.Tag = '887';

module.exports = UnderlyingStipulations;