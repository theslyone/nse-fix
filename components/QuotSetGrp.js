var NoQuoteSets = require('../fields/NoQuoteSets');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var QuotEntryGrp = require('../components/QuotEntryGrp');
var QuoteSetID = require('../fields/QuoteSetID');
var QuoteSetValidUntilTime = require('../fields/QuoteSetValidUntilTime');
var TotNoQuoteEntries = require('../fields/TotNoQuoteEntries');
var LastFragment = require('../fields/LastFragment');

function QuotSetGrp (quotSetGrp) {
  this.message = quotSetGrp;
}

/* group */

/* component */
QuotSetGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* component */
QuotSetGrp.prototype.quotEntryGrp = function () {
  return this.message.groups[QuotEntryGrp.Tag]
    .map(function (quotEntryGrp) {
      return new QuotEntryGrp(quotEntryGrp);
  });
};

/* field */
QuotSetGrp.prototype.quoteSetId = function () {
  return new QuoteSetID(this.message.tags[QuoteSetID.Tag]);
};

/* field */
QuotSetGrp.prototype.quoteSetValidUntilTime = function () {
  return new QuoteSetValidUntilTime(this.message.tags[QuoteSetValidUntilTime.Tag]);
};

/* field */
QuotSetGrp.prototype.totNoQuoteEntries = function () {
  return new TotNoQuoteEntries(this.message.tags[TotNoQuoteEntries.Tag]);
};

/* field */
QuotSetGrp.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[LastFragment.Tag]);
};

/* end group */

QuotSetGrp.Tag = '296';

module.exports = QuotSetGrp;