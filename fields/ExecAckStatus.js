var invert = require('invert-obj');

function ExecAckStatus (execAckStatus) {
  this.message = execAckStatus;
}

ExecAckStatus.prototype.value = function () {
  return this.message;
};


ExecAckStatus.Keys = {
  'RECEIVED_NOT_YET_PROCESSED': '0',
  'ACCEPTED': '1',
  'DONT_KNOW': '2',
};

ExecAckStatus.Tag = '1036';

ExecAckStatus.Type = 'CHAR';

ExecAckStatus.Values = invert(ExecAckStatus.Keys);

module.exports = ExecAckStatus;