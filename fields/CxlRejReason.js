var invert = require('invert-obj');

function CxlRejReason (cxlRejReason) {
  this.message = cxlRejReason;
}

CxlRejReason.prototype.value = function () {
  return this.message;
};


CxlRejReason.Keys = {
  'TOO_LATE_TO_CANCEL': '0',
  'UNKNOWN_ORDER': '1',
  'BROKER': '2',
  'ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS': '3',
  'UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST': '4',
  'ORIGORDMODTIME': '5',
  'DUPLICATE_CLORDID': '6',
  'OTHER': '99',
  'INVALID_PRICE_INCREMENT': '18',
  'PRICE_EXCEEDS_CURRENT_PRICE': '7',
  'PRICE_EXCEEDS_CURRENT_PRICE_BAND': '8',
};

CxlRejReason.Tag = '102';

CxlRejReason.Type = 'INT';

CxlRejReason.Values = invert(CxlRejReason.Keys);

module.exports = CxlRejReason;