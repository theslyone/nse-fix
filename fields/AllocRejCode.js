var invert = require('invert-obj');

function AllocRejCode (allocRejCode) {
  this.message = allocRejCode;
}

AllocRejCode.prototype.value = function () {
  return this.message;
};


AllocRejCode.Keys = {
  'UNKNOWN_ACCOUNT': '0',
  'INCORRECT_QUANTITY': '1',
  'UNKNOWN_OR_STALE_EXECID': '10',
  'MISMATCHED_DATA': '11',
  'UNKNOWN_CLORDID': '12',
  'WAREHOUSE_REQUEST_REJECTED': '13',
  'INCORRECT_AVERAGEG_PRICE': '2',
  'UNKNOWN_EXECUTING_BROKER_MNEMONIC': '3',
  'COMMISSION_DIFFERENCE': '4',
  'UNKNOWN_ORDERID': '5',
  'UNKNOWN_LISTID': '6',
  'OTHER': '7',
  'INCORRECT_ALLOCATED_QUANTITY': '8',
  'CALCULATION_DIFFERENCE': '9',
};

AllocRejCode.Tag = '88';

AllocRejCode.Type = 'INT';

AllocRejCode.Values = invert(AllocRejCode.Keys);

module.exports = AllocRejCode;