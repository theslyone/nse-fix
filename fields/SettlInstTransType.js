var invert = require('invert-obj');

function SettlInstTransType (settlInstTransType) {
  this.message = settlInstTransType;
}

SettlInstTransType.prototype.value = function () {
  return this.message;
};


SettlInstTransType.Keys = {
  'CANCEL': 'C',
  'NEW': 'N',
  'REPLACE': 'R',
  'RESTATE': 'T',
};

SettlInstTransType.Tag = '163';

SettlInstTransType.Type = 'CHAR';

SettlInstTransType.Values = invert(SettlInstTransType.Keys);

module.exports = SettlInstTransType;