var invert = require('invert-obj');

function SettlType (settlType) {
  this.message = settlType;
}

SettlType.prototype.value = function () {
  return this.message;
};


SettlType.Keys = {
  'REGULAR': '0',
  'CASH': '1',
  'NEXT_DAY': '2',
  'T_PLUS_2': '3',
  'T_PLUS_3': '4',
  'T_PLUS_4': '5',
  'FUTURE': '6',
  'WHEN_AND_IF_ISSUED': '7',
  'SELLERS_OPTION': '8',
  'T_PLUS_5': '9',
  'FX_SPOT_NEXT_SETTLEMENT': 'C',
  'BROKEN_DATE': 'B',
};

SettlType.Tag = '63';

SettlType.Type = 'STRING';

SettlType.Values = invert(SettlType.Keys);

module.exports = SettlType;