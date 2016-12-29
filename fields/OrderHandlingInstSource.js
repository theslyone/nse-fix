var invert = require('invert-obj');

function OrderHandlingInstSource (orderHandlingInstSource) {
  this.message = orderHandlingInstSource;
}

OrderHandlingInstSource.prototype.value = function () {
  return this.message;
};


OrderHandlingInstSource.Keys = {
  'NASD_OATS': '1',
};

OrderHandlingInstSource.Tag = '1032';

OrderHandlingInstSource.Type = 'INT';

OrderHandlingInstSource.Values = invert(OrderHandlingInstSource.Keys);

module.exports = OrderHandlingInstSource;