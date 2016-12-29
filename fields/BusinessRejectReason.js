var invert = require('invert-obj');

function BusinessRejectReason (businessRejectReason) {
  this.message = businessRejectReason;
}

BusinessRejectReason.prototype.value = function () {
  return this.message;
};


BusinessRejectReason.Keys = {
  'OTHER': '0',
  'UNKNOWN_ID': '1',
  'UNKNOWN_SECURITY': '2',
  'UNKNOWN_MESSAGE_TYPE': '3',
  'APPLICATION_NOT_AVAILABLE': '4',
  'CONDITIONALLY_REQUIRED_FIELD_MISSING': '5',
  'NOT_AUTHORIZED': '6',
  'DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME': '7',
  'INVALID_PRICE_INCREMENT': '18',
};

BusinessRejectReason.Tag = '380';

BusinessRejectReason.Type = 'INT';

BusinessRejectReason.Values = invert(BusinessRejectReason.Keys);

module.exports = BusinessRejectReason;