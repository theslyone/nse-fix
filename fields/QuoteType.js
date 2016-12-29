var invert = require('invert-obj');

function QuoteType (quoteType) {
  this.message = quoteType;
}

QuoteType.prototype.value = function () {
  return this.message;
};


QuoteType.Keys = {
  'INDICATIVE': '0',
  'TRADEABLE': '1',
  'RESTRICTED_TRADEABLE': '2',
  'COUNTER': '3',
};

QuoteType.Tag = '537';

QuoteType.Type = 'INT';

QuoteType.Values = invert(QuoteType.Keys);

module.exports = QuoteType;