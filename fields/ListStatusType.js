var invert = require('invert-obj');

function ListStatusType (listStatusType) {
  this.message = listStatusType;
}

ListStatusType.prototype.value = function () {
  return this.message;
};


ListStatusType.Keys = {
  'ACK': '1',
  'RESPONSE': '2',
  'TIMED': '3',
  'EXEC_STARTED': '4',
  'ALL_DONE': '5',
  'ALERT': '6',
};

ListStatusType.Tag = '429';

ListStatusType.Type = 'INT';

ListStatusType.Values = invert(ListStatusType.Keys);

module.exports = ListStatusType;