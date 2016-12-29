var invert = require('invert-obj');

function QuantityType (quantityType) {
  this.message = quantityType;
}

QuantityType.prototype.value = function () {
  return this.message;
};


QuantityType.Keys = {
  'SHARES': '1',
  'BONDS': '2',
  'CURRENTFACE': '3',
  'ORIGINALFACE': '4',
  'CURRENCY': '5',
  'CONTRACTS': '6',
  'OTHER': '7',
  'PAR': '8',
};

QuantityType.Tag = '465';

QuantityType.Type = 'INT';

QuantityType.Values = invert(QuantityType.Keys);

module.exports = QuantityType;