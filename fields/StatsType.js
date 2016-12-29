var invert = require('invert-obj');

function StatsType (statsType) {
  this.message = statsType;
}

StatsType.prototype.value = function () {
  return this.message;
};


StatsType.Keys = {
  'EXCHANGE_LAST': '1',
  'HIGH': '2',
  'AVERAGE_PRICE': '3',
  'TURNOVER': '4',
};

StatsType.Tag = '1176';

StatsType.Type = 'INT';

StatsType.Values = invert(StatsType.Keys);

module.exports = StatsType;