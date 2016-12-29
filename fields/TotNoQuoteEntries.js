var invert = require('invert-obj');

function TotNoQuoteEntries (totNoQuoteEntries) {
  this.message = totNoQuoteEntries;
}

TotNoQuoteEntries.prototype.value = function () {
  return this.message;
};

TotNoQuoteEntries.Tag = '304';

TotNoQuoteEntries.Type = 'INT';

module.exports = TotNoQuoteEntries;