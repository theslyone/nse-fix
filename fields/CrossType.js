var invert = require('invert-obj');

function CrossType (crossType) {
  this.message = crossType;
}

CrossType.prototype.value = function () {
  return this.message;
};


CrossType.Keys = {
  'CROSS_AON': '1',
  'CROSS_IOC': '2',
  'CROSS_ONE_SIDE': '3',
  'CROSS_SAME_PRICE': '4',
};

CrossType.Tag = '549';

CrossType.Type = 'INT';

CrossType.Values = invert(CrossType.Keys);

module.exports = CrossType;