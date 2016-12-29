var invert = require('invert-obj');

function SettlPriceType (settlPriceType) {
  this.message = settlPriceType;
}

SettlPriceType.prototype.value = function () {
  return this.message;
};


SettlPriceType.Keys = {
  'FINAL': '1',
  'THEORETICAL': '2',
};

SettlPriceType.Tag = '731';

SettlPriceType.Type = 'INT';

SettlPriceType.Values = invert(SettlPriceType.Keys);

module.exports = SettlPriceType;