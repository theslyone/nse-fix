var invert = require('invert-obj');

function SettlInstMode (settlInstMode) {
  this.message = settlInstMode;
}

SettlInstMode.prototype.value = function () {
  return this.message;
};


SettlInstMode.Keys = {
  'DEFAULT': '0',
  'STANDING_INSTRUCTIONS_PROVIDED': '1',
  'SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING': '2',
  'SPECIFIC_ALLOCATION_ACCOUNT_STANDING': '3',
  'SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT': '4',
  'REQUEST_REJECT': '5',
};

SettlInstMode.Tag = '160';

SettlInstMode.Type = 'CHAR';

SettlInstMode.Values = invert(SettlInstMode.Keys);

module.exports = SettlInstMode;