var invert = require('invert-obj');

function OrderCapacity (orderCapacity) {
  this.message = orderCapacity;
}

OrderCapacity.prototype.value = function () {
  return this.message;
};


OrderCapacity.Keys = {
  'AGENCY': 'A',
  'PROPRIETARY': 'G',
  'INDIVIDUAL': 'I',
  'PRINCIPAL': 'P',
  'RISKLESS_PRINCIPAL': 'R',
  'AGENT_FOR_OTHER_MEMBER': 'W',
};

OrderCapacity.Tag = '528';

OrderCapacity.Type = 'CHAR';

OrderCapacity.Values = invert(OrderCapacity.Keys);

module.exports = OrderCapacity;