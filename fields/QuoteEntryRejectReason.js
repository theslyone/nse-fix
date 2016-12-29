var invert = require('invert-obj');

function QuoteEntryRejectReason (quoteEntryRejectReason) {
  this.message = quoteEntryRejectReason;
}

QuoteEntryRejectReason.prototype.value = function () {
  return this.message;
};

QuoteEntryRejectReason.Tag = '368';

QuoteEntryRejectReason.Type = 'INT';

module.exports = QuoteEntryRejectReason;