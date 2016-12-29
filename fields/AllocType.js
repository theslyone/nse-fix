var invert = require('invert-obj');

function AllocType (allocType) {
  this.message = allocType;
}

AllocType.prototype.value = function () {
  return this.message;
};


AllocType.Keys = {
  'CALCULATED': '1',
  'PRELIMINARY': '2',
  'SELLSIDE_CALCULATED_USING_PRELIMINARY': '3',
  'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY': '4',
  'READY_TO_BOOK': '5',
  'BUYSIDE_READY_TO_BOOK': '6',
  'WAREHOUSE_INSTRUCTION': '7',
  'REQUEST_TO_INTERMEDIARY': '8',
  'ACCEPT': '9',
  'REJECT': '10',
  'ACCEPT_PENDING': '11',
  'INCOMPLETE_GROUP': '12',
  'COMPLETE_GROUP': '13',
  'REVERSAL_PENDING': '14',
};

AllocType.Tag = '626';

AllocType.Type = 'INT';

AllocType.Values = invert(AllocType.Keys);

module.exports = AllocType;