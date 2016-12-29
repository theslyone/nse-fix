var invert = require('invert-obj');

function QuoteStatusReqID (quoteStatusReqId) {
  this.message = quoteStatusReqId;
}

QuoteStatusReqID.prototype.value = function () {
  return this.message;
};

QuoteStatusReqID.Tag = '649';

QuoteStatusReqID.Type = 'STRING';

module.exports = QuoteStatusReqID;