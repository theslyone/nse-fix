var invert = require('invert-obj');

function QuoteSetID (quoteSetId) {
  this.message = quoteSetId;
}

QuoteSetID.prototype.value = function () {
  return this.message;
};

QuoteSetID.Tag = '302';

QuoteSetID.Type = 'STRING';

module.exports = QuoteSetID;