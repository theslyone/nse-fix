var invert = require('invert-obj');

function TargetStrategy (targetStrategy) {
  this.message = targetStrategy;
}

TargetStrategy.prototype.value = function () {
  return this.message;
};


TargetStrategy.Keys = {
  'VWAP': '1',
  'PARTICIPATE': '2',
  'MININIZE_MARKET_IMPACT': '3',
};

TargetStrategy.Tag = '847';

TargetStrategy.Type = 'INT';

TargetStrategy.Values = invert(TargetStrategy.Keys);

module.exports = TargetStrategy;