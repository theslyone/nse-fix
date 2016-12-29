var invert = require('invert-obj');

function SecDefStatus (secDefStatus) {
  this.message = secDefStatus;
}

SecDefStatus.prototype.value = function () {
  return this.message;
};


SecDefStatus.Keys = {
  'PENDING_APPROVAL': '0',
  'APPROVED': '1',
  'REJECTED': '2',
  'UNAUTHORIZED_REQUEST': '3',
  'INVALID_DEFINITION_REQUEST': '4',
};

SecDefStatus.Tag = '653';

SecDefStatus.Type = 'INT';

SecDefStatus.Values = invert(SecDefStatus.Keys);

module.exports = SecDefStatus;