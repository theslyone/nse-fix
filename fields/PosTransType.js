var invert = require('invert-obj');

function PosTransType (posTransType) {
  this.message = posTransType;
}

PosTransType.prototype.value = function () {
  return this.message;
};


PosTransType.Keys = {
  'EXERCISE': '1',
  'DO_NOT_EXERCISE': '2',
  'POSITION_ADJUSTMENT': '3',
  'POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION': '4',
  'PLEDGE': '5',
  'LARGE_TRADER_SUBMISSION': '6',
};

PosTransType.Tag = '709';

PosTransType.Type = 'INT';

PosTransType.Values = invert(PosTransType.Keys);

module.exports = PosTransType;