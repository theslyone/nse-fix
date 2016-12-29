var invert = require('invert-obj');

function PosMaintStatus (posMaintStatus) {
  this.message = posMaintStatus;
}

PosMaintStatus.prototype.value = function () {
  return this.message;
};


PosMaintStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_WARNINGS': '1',
  'REJECTED': '2',
  'COMPLETED': '3',
  'COMPLETED_WITH_WARNINGS': '4',
};

PosMaintStatus.Tag = '722';

PosMaintStatus.Type = 'INT';

PosMaintStatus.Values = invert(PosMaintStatus.Keys);

module.exports = PosMaintStatus;