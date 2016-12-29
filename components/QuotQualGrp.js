var NoQuoteQualifiers = require('../fields/NoQuoteQualifiers');
var QuoteQualifier = require('../fields/QuoteQualifier');

function QuotQualGrp (quotQualGrp) {
  this.message = quotQualGrp;
}

/* group */

/* field */
QuotQualGrp.prototype.quoteQualifier = function () {
  return new QuoteQualifier(this.message.tags[QuoteQualifier.Tag]);
};

/* end group */

QuotQualGrp.Tag = '735';

module.exports = QuotQualGrp;