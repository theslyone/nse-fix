var invert = require('invert-obj');

function QuoteStatus (quoteStatus) {
  this.message = quoteStatus;
}

QuoteStatus.prototype.value = function () {
  return this.message;
};


QuoteStatus.Keys = {
  'ACCEPTED': '0',
  'CANCEL_FOR_SYMBOL': '1',
  'PENDING': '10',
  'PASS': '11',
  'LOCKED_MARKET_WARNING': '12',
  'CROSS_MARKET_WARNING': '13',
  'CANCELED_DUE_TO_LOCK_MARKET': '14',
  'CANCELED_DUE_TO_CROSS_MARKET': '15',
  'CANCELED_FOR_SECURITY_TYPE': '2',
  'CANCELED_FOR_UNDERLYING': '3',
  'CANCELED_ALL': '4',
  'REJECTED': '5',
  'REMOVED_FROM_MARKET': '6',
  'EXPIRED': '7',
  'QUERY': '8',
  'QUOTE_NOT_FOUND': '9',
  'ACTIVE': '16',
  'CANCELED': '17',
  'UNSOLICITED_QUOTE_REPLENISHMENT': '18',
  'PENDING_END_TRADE': '19',
  'TOO_LATE_TO_END': '20',
};

QuoteStatus.Tag = '297';

QuoteStatus.Type = 'INT';

QuoteStatus.Values = invert(QuoteStatus.Keys);

module.exports = QuoteStatus;