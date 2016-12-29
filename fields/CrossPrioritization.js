var invert = require('invert-obj');

function CrossPrioritization (crossPrioritization) {
  this.message = crossPrioritization;
}

CrossPrioritization.prototype.value = function () {
  return this.message;
};


CrossPrioritization.Keys = {
  'NONE': '0',
  'BUY_SIDE_IS_PRIORITIZED': '1',
  'SELL_SIDE_IS_PRIORITIZED': '2',
};

CrossPrioritization.Tag = '550';

CrossPrioritization.Type = 'INT';

CrossPrioritization.Values = invert(CrossPrioritization.Keys);

module.exports = CrossPrioritization;