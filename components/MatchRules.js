var NoMatchRules = require('../fields/NoMatchRules');
var MatchAlgorithm = require('../fields/MatchAlgorithm');
var MatchType = require('../fields/MatchType');

function MatchRules (matchRules) {
  this.message = matchRules;
}

/* group */

/* field */
MatchRules.prototype.matchAlgorithm = function () {
  return new MatchAlgorithm(this.message.tags[MatchAlgorithm.Tag]);
};

/* field */
MatchRules.prototype.matchType = function () {
  return new MatchType(this.message.tags[MatchType.Tag]);
};

/* end group */

MatchRules.Tag = '1235';

module.exports = MatchRules;