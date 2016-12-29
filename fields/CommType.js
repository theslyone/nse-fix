var invert = require('invert-obj');

function CommType (commType) {
  this.message = commType;
}

CommType.prototype.value = function () {
  return this.message;
};


CommType.Keys = {
  'PER_UNIT': '1',
  'PERCENT': '2',
  'ABSOLUTE': '3',
  'PERCENTAGE_WAIVED_4': '4',
  'PERCENTAGE_WAIVED_5': '5',
  'POINTS_PER_BOND_OR_CONTRACT': '6',
};

CommType.Tag = '13';

CommType.Type = 'CHAR';

CommType.Values = invert(CommType.Keys);

module.exports = CommType;