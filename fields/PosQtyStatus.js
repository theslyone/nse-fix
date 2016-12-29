var invert = require('invert-obj');

function PosQtyStatus (posQtyStatus) {
  this.message = posQtyStatus;
}

PosQtyStatus.prototype.value = function () {
  return this.message;
};


PosQtyStatus.Keys = {
  'SUBMITTED': '0',
  'ACCEPTED': '1',
  'REJECTED': '2',
};

PosQtyStatus.Tag = '706';

PosQtyStatus.Type = 'INT';

PosQtyStatus.Values = invert(PosQtyStatus.Keys);

module.exports = PosQtyStatus;