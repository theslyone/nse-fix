var invert = require('invert-obj');

function ListRejectReason (listRejectReason) {
  this.message = listRejectReason;
}

ListRejectReason.prototype.value = function () {
  return this.message;
};


ListRejectReason.Keys = {
  'BROKER': '0',
  'EXCHANGE_CLOSED': '2',
  'TOO_LATE_TO_ENTER': '4',
  'UNKNOWN_ORDER': '5',
  'DUPLICATE_ORDER': '6',
  'UNSUPPORTED_ORDER_CHARACTERISTIC': '11',
  'OTHER': '99',
};

ListRejectReason.Tag = '1386';

ListRejectReason.Type = 'INT';

ListRejectReason.Values = invert(ListRejectReason.Keys);

module.exports = ListRejectReason;