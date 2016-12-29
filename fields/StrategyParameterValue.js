var invert = require('invert-obj');

function StrategyParameterValue (strategyParameterValue) {
  this.message = strategyParameterValue;
}

StrategyParameterValue.prototype.value = function () {
  return this.message;
};

StrategyParameterValue.Tag = '960';

StrategyParameterValue.Type = 'STRING';

module.exports = StrategyParameterValue;