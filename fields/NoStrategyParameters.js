var invert = require('invert-obj');

function NoStrategyParameters (noStrategyParameters) {
  this.message = noStrategyParameters;
}

NoStrategyParameters.prototype.value = function () {
  return this.message;
};

NoStrategyParameters.Tag = '957';

NoStrategyParameters.Type = 'NUMINGROUP';

module.exports = NoStrategyParameters;