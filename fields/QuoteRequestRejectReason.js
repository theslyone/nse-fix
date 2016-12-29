var invert = require('invert-obj');

function QuoteRequestRejectReason (quoteRequestRejectReason) {
  this.message = quoteRequestRejectReason;
}

QuoteRequestRejectReason.prototype.value = function () {
  return this.message;
};


QuoteRequestRejectReason.Keys = {
  'UNKNOWN_SYMBOL': '1',
  'PASS': '10',
  'EXCHANGE': '2',
  'QUOTE_REQUEST_EXCEEDS_LIMIT': '3',
  'TOO_LATE_TO_ENTER': '4',
  'INVALID_PRICE': '5',
  'NOT_AUTHORIZED_TO_REQUEST_QUOTE': '6',
  'NO_MATCH_FOR_INQUIRY': '7',
  'NO_MARKET_FOR_INSTRUMENT': '8',
  'NO_INVENTORY': '9',
  'OTHER': '99',
  'INSUFFICIENT_CREDIT': '11',
};

QuoteRequestRejectReason.Tag = '658';

QuoteRequestRejectReason.Type = 'INT';

QuoteRequestRejectReason.Values = invert(QuoteRequestRejectReason.Keys);

module.exports = QuoteRequestRejectReason;