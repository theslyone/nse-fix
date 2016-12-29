var invert = require('invert-obj');

function ExecType (execType) {
  this.message = execType;
}

ExecType.prototype.value = function () {
  return this.message;
};


ExecType.Keys = {
  'NEW': '0',
  'DONE_FOR_DAY': '3',
  'CANCELED': '4',
  'REPLACED': '5',
  'PENDING_CANCEL': '6',
  'STOPPED': '7',
  'REJECTED': '8',
  'SUSPENDED': '9',
  'PENDING_NEW': 'A',
  'CALCULATED': 'B',
  'EXPIRED': 'C',
  'RESTATED': 'D',
  'PENDING_REPLACE': 'E',
  'TRADE': 'F',
  'TRADE_CORRECT': 'G',
  'TRADE_CANCEL': 'H',
  'ORDER_STATUS': 'I',
  'TRADE_IN_A_CLEARING_HOLD': 'J',
  'TRADE_HAS_BEEN_RELEASED_TO_CLEARING': 'K',
  'TRIGGERED_OR_ACTIVATED_BY_SYSTEM': 'L',
};

ExecType.Tag = '150';

ExecType.Type = 'CHAR';

ExecType.Values = invert(ExecType.Keys);

module.exports = ExecType;