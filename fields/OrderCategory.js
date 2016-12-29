var invert = require('invert-obj');

function OrderCategory (orderCategory) {
  this.message = orderCategory;
}

OrderCategory.prototype.value = function () {
  return this.message;
};


OrderCategory.Keys = {
  'ORDER': '1',
  'QUOTE': '2',
  'PRIVATELY_NEGOTIATED_TRADE': '3',
  'MULTILEG_ORDER': '4',
  'LINKED_ORDER': '5',
  'QUOTE_REQUEST': '6',
  'IMPLIED_ORDER': '7',
  'CROSS_ORDER': '8',
  'STREAMING_PRICE': '9',
};

OrderCategory.Tag = '1115';

OrderCategory.Type = 'CHAR';

OrderCategory.Values = invert(OrderCategory.Keys);

module.exports = OrderCategory;