var invert = require('invert-obj');

function QuoteResponseLevel (quoteResponseLevel) {
  this.message = quoteResponseLevel;
}

QuoteResponseLevel.prototype.value = function () {
  return this.message;
};


QuoteResponseLevel.Keys = {
  'NO_ACKNOWLEDGEMENT': '0',
  'ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES': '1',
  'ACKNOWLEDGE_EACH_QUOTE_MESSAGES': '2',
  'SUMMARY_ACKNOWLEDGEMENT': '3',
};

QuoteResponseLevel.Tag = '301';

QuoteResponseLevel.Type = 'INT';

QuoteResponseLevel.Values = invert(QuoteResponseLevel.Keys);

module.exports = QuoteResponseLevel;