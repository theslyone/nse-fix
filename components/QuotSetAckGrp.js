var NoQuoteSets = require('../fields/NoQuoteSets');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var QuotEntryAckGrp = require('../components/QuotEntryAckGrp');
var QuoteSetID = require('../fields/QuoteSetID');
var TotNoQuoteEntries = require('../fields/TotNoQuoteEntries');
var LastFragment = require('../fields/LastFragment');
var TotNoCxldQuotes = require('../fields/TotNoCxldQuotes');
var TotNoAccQuotes = require('../fields/TotNoAccQuotes');
var TotNoRejQuotes = require('../fields/TotNoRejQuotes');

function QuotSetAckGrp (quotSetAckGrp) {
  this.message = quotSetAckGrp;
}

/* group */

/* component */
QuotSetAckGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* component */
QuotSetAckGrp.prototype.quotEntryAckGrp = function () {
  return this.message.groups[QuotEntryAckGrp.Tag]
    .map(function (quotEntryAckGrp) {
      return new QuotEntryAckGrp(quotEntryAckGrp);
  });
};

/* field */
QuotSetAckGrp.prototype.quoteSetId = function () {
  return new QuoteSetID(this.message.tags[QuoteSetID.Tag]);
};

/* field */
QuotSetAckGrp.prototype.totNoQuoteEntries = function () {
  return new TotNoQuoteEntries(this.message.tags[TotNoQuoteEntries.Tag]);
};

/* field */
QuotSetAckGrp.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[LastFragment.Tag]);
};

/* field */
QuotSetAckGrp.prototype.totNoCxldQuotes = function () {
  return new TotNoCxldQuotes(this.message.tags[TotNoCxldQuotes.Tag]);
};

/* field */
QuotSetAckGrp.prototype.totNoAccQuotes = function () {
  return new TotNoAccQuotes(this.message.tags[TotNoAccQuotes.Tag]);
};

/* field */
QuotSetAckGrp.prototype.totNoRejQuotes = function () {
  return new TotNoRejQuotes(this.message.tags[TotNoRejQuotes.Tag]);
};

/* end group */

QuotSetAckGrp.Tag = '296';

module.exports = QuotSetAckGrp;