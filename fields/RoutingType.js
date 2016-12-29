var invert = require('invert-obj');

function RoutingType (routingType) {
  this.message = routingType;
}

RoutingType.prototype.value = function () {
  return this.message;
};


RoutingType.Keys = {
  'TARGET_FIRM': '1',
  'TARGET_LIST': '2',
  'BLOCK_FIRM': '3',
  'BLOCK_LIST': '4',
};

RoutingType.Tag = '216';

RoutingType.Type = 'INT';

RoutingType.Values = invert(RoutingType.Keys);

module.exports = RoutingType;