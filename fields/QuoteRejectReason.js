var invert = require('invert-obj');

function QuoteRejectReason (quoteRejectReason) {
  this.message = quoteRejectReason;
}

QuoteRejectReason.prototype.value = function () {
  return this.message;
};


QuoteRejectReason.Keys = {
  'UNKNOWN_SYMBOL': '1',
  'EXCHANGE': '2',
  'QUOTE_REQUEST_EXCEEDS_LIMIT': '3',
  'TOO_LATE_TO_ENTER': '4',
  'UNKNOWN_QUOTE': '5',
  'DUPLICATE_QUOTE': '6',
  'INVALID_BID_ASK_SPREAD': '7',
  'INVALID_PRICE': '8',
  'NOT_AUTHORIZED_TO_QUOTE_SECURITY': '9',
  'OTHER': '99',
  'PRICE_EXCEEDS_CURRENT_PRICE_BAND': '10',
  'QUOTE_LOCKED': '11',
};

QuoteRejectReason.Tag = '300';

QuoteRejectReason.Type = 'INT';

QuoteRejectReason.Values = invert(QuoteRejectReason.Keys);

module.exports = QuoteRejectReason;