var NoTickRules = require('../fields/NoTickRules');
var StartTickPriceRange = require('../fields/StartTickPriceRange');
var EndTickPriceRange = require('../fields/EndTickPriceRange');
var TickIncrement = require('../fields/TickIncrement');
var TickRuleType = require('../fields/TickRuleType');

function TickRules (tickRules) {
  this.message = tickRules;
}

/* group */

/* field */
TickRules.prototype.startTickPriceRange = function () {
  return new StartTickPriceRange(this.message.tags[StartTickPriceRange.Tag]);
};

/* field */
TickRules.prototype.endTickPriceRange = function () {
  return new EndTickPriceRange(this.message.tags[EndTickPriceRange.Tag]);
};

/* field */
TickRules.prototype.tickIncrement = function () {
  return new TickIncrement(this.message.tags[TickIncrement.Tag]);
};

/* field */
TickRules.prototype.tickRuleType = function () {
  return new TickRuleType(this.message.tags[TickRuleType.Tag]);
};

/* end group */

TickRules.Tag = '1205';

module.exports = TickRules;