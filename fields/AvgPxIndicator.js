var invert = require('invert-obj');

function AvgPxIndicator (avgPxIndicator) {
  this.message = avgPxIndicator;
}

AvgPxIndicator.prototype.value = function () {
  return this.message;
};


AvgPxIndicator.Keys = {
  'NO_AVERAGE_PRICING': '0',
  'TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID': '1',
  'LAST_TRADE_IS_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID': '2',
};

AvgPxIndicator.Tag = '819';

AvgPxIndicator.Type = 'INT';

AvgPxIndicator.Values = invert(AvgPxIndicator.Keys);

module.exports = AvgPxIndicator;