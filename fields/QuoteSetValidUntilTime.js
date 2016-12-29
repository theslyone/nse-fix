var invert = require('invert-obj');

function QuoteSetValidUntilTime (quoteSetValidUntilTime) {
  this.message = quoteSetValidUntilTime;
}

QuoteSetValidUntilTime.prototype.value = function () {
  return this.message;
};

QuoteSetValidUntilTime.Tag = '367';

QuoteSetValidUntilTime.Type = 'UTCTIMESTAMP';

module.exports = QuoteSetValidUntilTime;