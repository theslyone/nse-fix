var invert = require('invert-obj');

function PosReqStatus (posReqStatus) {
  this.message = posReqStatus;
}

PosReqStatus.prototype.value = function () {
  return this.message;
};


PosReqStatus.Keys = {
  'COMPLETED': '0',
  'COMPLETED_WITH_WARNINGS': '1',
  'REJECTED': '2',
};

PosReqStatus.Tag = '729';

PosReqStatus.Type = 'INT';

PosReqStatus.Values = invert(PosReqStatus.Keys);

module.exports = PosReqStatus;