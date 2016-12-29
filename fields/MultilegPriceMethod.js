var invert = require('invert-obj');

function MultilegPriceMethod (multilegPriceMethod) {
  this.message = multilegPriceMethod;
}

MultilegPriceMethod.prototype.value = function () {
  return this.message;
};


MultilegPriceMethod.Keys = {
  'NET_PRICE': '0',
  'REVERSED_NET_PRICE': '1',
  'YIELD_DIFFERENCE': '2',
  'INDIVIDUAL': '3',
  'CONTRACT_WEIGHTED_AVERAGE_PRICE': '4',
  'MULTIPLIED_PRICE': '5',
};

MultilegPriceMethod.Tag = '1378';

MultilegPriceMethod.Type = 'INT';

MultilegPriceMethod.Values = invert(MultilegPriceMethod.Keys);

module.exports = MultilegPriceMethod;