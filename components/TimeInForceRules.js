var NoTimeInForceRules = require('../fields/NoTimeInForceRules');
var TimeInForce = require('../fields/TimeInForce');

function TimeInForceRules (timeInForceRules) {
  this.message = timeInForceRules;
}

/* group */

/* field */
TimeInForceRules.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* end group */

TimeInForceRules.Tag = '1239';

module.exports = TimeInForceRules;