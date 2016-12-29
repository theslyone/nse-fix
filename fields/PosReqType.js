var invert = require('invert-obj');

function PosReqType (posReqType) {
  this.message = posReqType;
}

PosReqType.prototype.value = function () {
  return this.message;
};


PosReqType.Keys = {
  'POSITIONS': '0',
  'TRADES': '1',
  'EXERCISES': '2',
  'ASSIGNMENTS': '3',
  'SETTLEMENT_ACTIVITY': '4',
  'BACKOUT_MESSAGE': '5',
};

PosReqType.Tag = '724';

PosReqType.Type = 'INT';

PosReqType.Values = invert(PosReqType.Keys);

module.exports = PosReqType;