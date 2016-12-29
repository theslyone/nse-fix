var invert = require('invert-obj');

function QuoteID (quoteId) {
  this.message = quoteId;
}

QuoteID.prototype.value = function () {
  return this.message;
};

QuoteID.Tag = '117';

QuoteID.Type = 'STRING';

module.exports = QuoteID;