var invert = require('invert-obj');

function ClearingInstruction (clearingInstruction) {
  this.message = clearingInstruction;
}

ClearingInstruction.prototype.value = function () {
  return this.message;
};


ClearingInstruction.Keys = {
  'PROCESS_NORMALLY': '0',
  'EXCLUDE_FROM_ALL_NETTING': '1',
  'AUTOMATIC_GIVE_UP_MODE': '10',
  'QUALIFIED_SERVICE_REPRESENTATIVE_QSR': '11',
  'CUSTOMER_TRADE': '12',
  'SELF_CLEARING': '13',
  'BILATERAL_NETTING_ONLY': '2',
  'EX_CLEARING': '3',
  'SPECIAL_TRADE': '4',
  'MULTILATERAL_NETTING': '5',
  'CLEAR_AGAINST_CENTRAL_COUNTERPARTY': '6',
  'EXCLUDE_FROM_CENTRAL_COUNTERPARTY': '7',
  'MANUAL_MODE': '8',
  'AUTOMATIC_POSTING_MODE': '9',
};

ClearingInstruction.Tag = '577';

ClearingInstruction.Type = 'INT';

ClearingInstruction.Values = invert(ClearingInstruction.Keys);

module.exports = ClearingInstruction;