var invert = require('invert-obj');

function QuoteEntryStatus (quoteEntryStatus) {
  this.message = quoteEntryStatus;
}

QuoteEntryStatus.prototype.value = function () {
  return this.message;
};


QuoteEntryStatus.Keys = {
  'ACCEPTED': '0',
  'REJECTED': '5',
  'REMOVED_FROM_MARKET': '6',
  'EXPIRED': '7',
  'LOCKED_MARKET_WARNING': '12',
  'CROSS_MARKET_WARNING': '13',
  'CANCELED_DUE_TO_LOCK_MARKET': '14',
  'CANCELED_DUE_TO_CROSS_MARKET': '15',
  'ACTIVE': '16',
};

QuoteEntryStatus.Tag = '1167';

QuoteEntryStatus.Type = 'INT';

QuoteEntryStatus.Values = invert(QuoteEntryStatus.Keys);

module.exports = QuoteEntryStatus;