var invert = require('invert-obj');

function QuoteReqID (quoteReqId) {
  this.message = quoteReqId;
}

QuoteReqID.prototype.value = function () {
  return this.message;
};

QuoteReqID.Tag = '131';

QuoteReqID.Type = 'STRING';

module.exports = QuoteReqID;