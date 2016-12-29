var invert = require('invert-obj');

function QuoteEntryID (quoteEntryId) {
  this.message = quoteEntryId;
}

QuoteEntryID.prototype.value = function () {
  return this.message;
};

QuoteEntryID.Tag = '299';

QuoteEntryID.Type = 'STRING';

module.exports = QuoteEntryID;