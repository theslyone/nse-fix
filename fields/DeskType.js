var invert = require('invert-obj');

function DeskType (deskType) {
  this.message = deskType;
}

DeskType.prototype.value = function () {
  return this.message;
};


DeskType.Keys = {
  'AGENCY': 'A',
  'ARBITRAGE': 'AR',
  'DERIVATIVES': 'D',
  'INTERNATIONAL': 'IN',
  'INSTITUTIONAL': 'IS',
  'OTHER': 'O',
  'PREFERRED_TRADING': 'PF',
  'PROPRIETARY': 'PR',
  'PROGRAM_TRADING': 'PT',
  'SALES': 'S',
  'TRADING': 'T',
};

DeskType.Tag = '1033';

DeskType.Type = 'STRING';

DeskType.Values = invert(DeskType.Keys);

module.exports = DeskType;