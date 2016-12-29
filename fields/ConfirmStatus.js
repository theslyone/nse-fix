var invert = require('invert-obj');

function ConfirmStatus (confirmStatus) {
  this.message = confirmStatus;
}

ConfirmStatus.prototype.value = function () {
  return this.message;
};


ConfirmStatus.Keys = {
  'RECEIVED': '1',
  'MISMATCHED_ACCOUNT': '2',
  'MISSING_SETTLEMENT_INSTRUCTIONS': '3',
  'CONFIRMED': '4',
  'REQUEST_REJECTED': '5',
};

ConfirmStatus.Tag = '665';

ConfirmStatus.Type = 'INT';

ConfirmStatus.Values = invert(ConfirmStatus.Keys);

module.exports = ConfirmStatus;