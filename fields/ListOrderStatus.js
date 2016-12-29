var invert = require('invert-obj');

function ListOrderStatus (listOrderStatus) {
  this.message = listOrderStatus;
}

ListOrderStatus.prototype.value = function () {
  return this.message;
};


ListOrderStatus.Keys = {
  'IN_BIDDING_PROCESS': '1',
  'RECEIVED_FOR_EXECUTION': '2',
  'EXECUTING': '3',
  'CANCELLING': '4',
  'ALERT': '5',
  'ALL_DONE': '6',
  'REJECT': '7',
};

ListOrderStatus.Tag = '431';

ListOrderStatus.Type = 'INT';

ListOrderStatus.Values = invert(ListOrderStatus.Keys);

module.exports = ListOrderStatus;