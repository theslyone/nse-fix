var invert = require('invert-obj');

function PriceProtectionScope (priceProtectionScope) {
  this.message = priceProtectionScope;
}

PriceProtectionScope.prototype.value = function () {
  return this.message;
};


PriceProtectionScope.Keys = {
  'NONE': '0',
  'LOCAL': '1',
  'NATIONAL': '2',
  'GLOBAL': '3',
};

PriceProtectionScope.Tag = '1092';

PriceProtectionScope.Type = 'CHAR';

PriceProtectionScope.Values = invert(PriceProtectionScope.Keys);

module.exports = PriceProtectionScope;