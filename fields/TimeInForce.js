var invert = require('invert-obj');

function TimeInForce (timeInForce) {
  this.message = timeInForce;
}

TimeInForce.prototype.value = function () {
  return this.message;
};


TimeInForce.Keys = {
  'DAY': '0',
  'GOOD_TILL_CANCEL': '1',
  'AT_THE_OPENING': '2',
  'IMMEDIATE_OR_CANCEL': '3',
  'FILL_OR_KILL': '4',
  'GOOD_TILL_CROSSING': '5',
  'GOOD_TILL_DATE': '6',
  'AT_THE_CLOSE': '7',
  'GOOD_THROUGH_CROSSING': '8',
  'AT_CROSSING': '9',
};

TimeInForce.Tag = '59';

TimeInForce.Type = 'CHAR';

TimeInForce.Values = invert(TimeInForce.Keys);

module.exports = TimeInForce;