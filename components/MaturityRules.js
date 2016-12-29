var NoMaturityRules = require('../fields/NoMaturityRules');
var MaturityRuleID = require('../fields/MaturityRuleID');
var MaturityMonthYearFormat = require('../fields/MaturityMonthYearFormat');
var MaturityMonthYearIncrementUnits = require('../fields/MaturityMonthYearIncrementUnits');
var StartMaturityMonthYear = require('../fields/StartMaturityMonthYear');
var EndMaturityMonthYear = require('../fields/EndMaturityMonthYear');
var MaturityMonthYearIncrement = require('../fields/MaturityMonthYearIncrement');

function MaturityRules (maturityRules) {
  this.message = maturityRules;
}

/* group */

/* field */
MaturityRules.prototype.maturityRuleId = function () {
  return new MaturityRuleID(this.message.tags[MaturityRuleID.Tag]);
};

/* field */
MaturityRules.prototype.maturityMonthYearFormat = function () {
  return new MaturityMonthYearFormat(this.message.tags[MaturityMonthYearFormat.Tag]);
};

/* field */
MaturityRules.prototype.maturityMonthYearIncrementUnits = function () {
  return new MaturityMonthYearIncrementUnits(this.message.tags[MaturityMonthYearIncrementUnits.Tag]);
};

/* field */
MaturityRules.prototype.startMaturityMonthYear = function () {
  return new StartMaturityMonthYear(this.message.tags[StartMaturityMonthYear.Tag]);
};

/* field */
MaturityRules.prototype.endMaturityMonthYear = function () {
  return new EndMaturityMonthYear(this.message.tags[EndMaturityMonthYear.Tag]);
};

/* field */
MaturityRules.prototype.maturityMonthYearIncrement = function () {
  return new MaturityMonthYearIncrement(this.message.tags[MaturityMonthYearIncrement.Tag]);
};

/* end group */

MaturityRules.Tag = '1236';

module.exports = MaturityRules;