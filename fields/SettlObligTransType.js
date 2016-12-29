var invert = require('invert-obj');

function SettlObligTransType (settlObligTransType) {
  this.message = settlObligTransType;
}

SettlObligTransType.prototype.value = function () {
  return this.message;
};


SettlObligTransType.Keys = {
  'CANCEL': 'C',
  'NEW': 'N',
  'REPLACE': 'R',
  'RESTATE': 'T',
};

SettlObligTransType.Tag = '1162';

SettlObligTransType.Type = 'CHAR';

SettlObligTransType.Values = invert(SettlObligTransType.Keys);

module.exports = SettlObligTransType;