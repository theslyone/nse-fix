var invert = require('invert-obj');

function OrdStatus (ordStatus) {
  this.message = ordStatus;
}

OrdStatus.prototype.value = function () {
  return this.message;
};


OrdStatus.Keys = {
  'NEW': '0',
  'PARTIALLY_FILLED': '1',
  'FILLED': '2',
  'DONE_FOR_DAY': '3',
  'CANCELED': '4',
  'PENDING_CANCEL': '6',
  'STOPPED': '7',
  'REJECTED': '8',
  'SUSPENDED': '9',
  'PENDING_NEW': 'A',
  'CALCULATED': 'B',
  'EXPIRED': 'C',
  'ACCEPTED_FOR_BIDDING': 'D',
  'PENDING_REPLACE': 'E',
  'REPLACED': '5',
};

OrdStatus.Tag = '39';

OrdStatus.Type = 'CHAR';

OrdStatus.Values = invert(OrdStatus.Keys);

module.exports = OrdStatus;