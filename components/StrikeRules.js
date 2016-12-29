var NoStrikeRules = require('../fields/NoStrikeRules');
var MaturityRules = require('../components/MaturityRules');
var StrikeRuleID = require('../fields/StrikeRuleID');
var StartStrikePxRange = require('../fields/StartStrikePxRange');
var EndStrikePxRange = require('../fields/EndStrikePxRange');
var StrikeIncrement = require('../fields/StrikeIncrement');
var StrikeExerciseStyle = require('../fields/StrikeExerciseStyle');

function StrikeRules (strikeRules) {
  this.message = strikeRules;
}

/* group */

/* component */
StrikeRules.prototype.maturityRules = function () {
  return this.message.groups[MaturityRules.Tag]
    .map(function (maturityRules) {
      return new MaturityRules(maturityRules);
  });
};

/* field */
StrikeRules.prototype.strikeRuleId = function () {
  return new StrikeRuleID(this.message.tags[StrikeRuleID.Tag]);
};

/* field */
StrikeRules.prototype.startStrikePxRange = function () {
  return new StartStrikePxRange(this.message.tags[StartStrikePxRange.Tag]);
};

/* field */
StrikeRules.prototype.endStrikePxRange = function () {
  return new EndStrikePxRange(this.message.tags[EndStrikePxRange.Tag]);
};

/* field */
StrikeRules.prototype.strikeIncrement = function () {
  return new StrikeIncrement(this.message.tags[StrikeIncrement.Tag]);
};

/* field */
StrikeRules.prototype.strikeExerciseStyle = function () {
  return new StrikeExerciseStyle(this.message.tags[StrikeExerciseStyle.Tag]);
};

/* end group */

StrikeRules.Tag = '1201';

module.exports = StrikeRules;