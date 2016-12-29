var invert = require('invert-obj');

function SettlObligMode (settlObligMode) {
  this.message = settlObligMode;
}

SettlObligMode.prototype.value = function () {
  return this.message;
};


SettlObligMode.Keys = {
  'PRELIMINARY': '1',
  'FINAL': '2',
};

SettlObligMode.Tag = '1159';

SettlObligMode.Type = 'INT';

SettlObligMode.Values = invert(SettlObligMode.Keys);

module.exports = SettlObligMode;