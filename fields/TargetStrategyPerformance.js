var invert = require('invert-obj');

function TargetStrategyPerformance (targetStrategyPerformance) {
  this.message = targetStrategyPerformance;
}

TargetStrategyPerformance.prototype.value = function () {
  return this.message;
};

TargetStrategyPerformance.Tag = '850';

TargetStrategyPerformance.Type = 'FLOAT';

module.exports = TargetStrategyPerformance;