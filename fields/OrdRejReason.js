var invert = require('invert-obj');

function OrdRejReason (ordRejReason) {
  this.message = ordRejReason;
}

OrdRejReason.prototype.value = function () {
  return this.message;
};


OrdRejReason.Keys = {
  'BROKER': '0',
  'UNKNOWN_SYMBOL': '1',
  'INVALID_INVESTOR_ID': '10',
  'UNSUPPORTED_ORDER_CHARACTERISTIC': '11',
  'SURVEILLENCE_OPTION': '12',
  'INCORRECT_QUANTITY': '13',
  'INCORRECT_ALLOCATED_QUANTITY': '14',
  'UNKNOWN_ACCOUNT': '15',
  'EXCHANGE_CLOSED': '2',
  'ORDER_EXCEEDS_LIMIT': '3',
  'TOO_LATE_TO_ENTER': '4',
  'UNKNOWN_ORDER': '5',
  'DUPLICATE_ORDER': '6',
  'DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER': '7',
  'STALE_ORDER': '8',
  'TRADE_ALONG_REQUIRED': '9',
  'OTHER': '99',
  'INVALID_PRICE_INCREMENT': '18',
  'PRICE_EXCEEDS_CURRENT_PRICE_BAND': '16',
};

OrdRejReason.Tag = '103';

OrdRejReason.Type = 'INT';

OrdRejReason.Values = invert(OrdRejReason.Keys);

module.exports = OrdRejReason;