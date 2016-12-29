var invert = require('invert-obj');

function SettlMethod (settlMethod) {
  this.message = settlMethod;
}

SettlMethod.prototype.value = function () {
  return this.message;
};


SettlMethod.Keys = {
  'CASH_SETTLEMENT_REQUIRED': 'C',
  'PHYSICAL_SETTLEMENT_REQUIRED': 'P',
};

SettlMethod.Tag = '1193';

SettlMethod.Type = 'CHAR';

SettlMethod.Values = invert(SettlMethod.Keys);

module.exports = SettlMethod;