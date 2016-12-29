var invert = require('invert-obj');

function NoQuoteEntries (noQuoteEntries) {
  this.message = noQuoteEntries;
}

NoQuoteEntries.prototype.value = function () {
  return this.message;
};

NoQuoteEntries.Tag = '295';

NoQuoteEntries.Type = 'NUMINGROUP';

module.exports = NoQuoteEntries;