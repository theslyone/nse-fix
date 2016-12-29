var NoStrategyParameters = require('../fields/NoStrategyParameters');
var StrategyParameterName = require('../fields/StrategyParameterName');
var StrategyParameterType = require('../fields/StrategyParameterType');
var StrategyParameterValue = require('../fields/StrategyParameterValue');

function StrategyParametersGrp (strategyParametersGrp) {
  this.message = strategyParametersGrp;
}

/* group */

/* field */
StrategyParametersGrp.prototype.strategyParameterName = function () {
  return new StrategyParameterName(this.message.tags[StrategyParameterName.Tag]);
};

/* field */
StrategyParametersGrp.prototype.strategyParameterType = function () {
  return new StrategyParameterType(this.message.tags[StrategyParameterType.Tag]);
};

/* field */
StrategyParametersGrp.prototype.strategyParameterValue = function () {
  return new StrategyParameterValue(this.message.tags[StrategyParameterValue.Tag]);
};

/* end group */

StrategyParametersGrp.Tag = '957';

module.exports = StrategyParametersGrp;