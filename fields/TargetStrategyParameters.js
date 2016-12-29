var invert = require('invert-obj');

function TargetStrategyParameters (targetStrategyParameters) {
  this.message = targetStrategyParameters;
}

TargetStrategyParameters.prototype.value = function () {
  return this.message;
};

TargetStrategyParameters.Tag = '848';

TargetStrategyParameters.Type = 'STRING';

module.exports = TargetStrategyParameters;