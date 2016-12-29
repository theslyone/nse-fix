var invert = require('invert-obj');

function AllocTransType (allocTransType) {
  this.message = allocTransType;
}

AllocTransType.prototype.value = function () {
  return this.message;
};


AllocTransType.Keys = {
  'NEW': '0',
  'REPLACE': '1',
  'CANCEL': '2',
  'PRELIMINARY': '3',
  'CALCULATED': '4',
  'CALCULATED_WITHOUT_PRELIMINARY': '5',
  'REVERSAL': '6',
};

AllocTransType.Tag = '71';

AllocTransType.Type = 'CHAR';

AllocTransType.Values = invert(AllocTransType.Keys);

module.exports = AllocTransType;