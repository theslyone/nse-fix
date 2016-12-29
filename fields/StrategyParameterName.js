var invert = require('invert-obj');

function StrategyParameterName (strategyParameterName) {
  this.message = strategyParameterName;
}

StrategyParameterName.prototype.value = function () {
  return this.message;
};

StrategyParameterName.Tag = '958';

StrategyParameterName.Type = 'STRING';

module.exports = StrategyParameterName;