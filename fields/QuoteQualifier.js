var invert = require('invert-obj');

function QuoteQualifier (quoteQualifier) {
  this.message = quoteQualifier;
}

QuoteQualifier.prototype.value = function () {
  return this.message;
};

QuoteQualifier.Tag = '695';

QuoteQualifier.Type = 'CHAR';

module.exports = QuoteQualifier;