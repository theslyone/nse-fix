var invert = require('invert-obj');

function QuoteRespID (quoteRespId) {
  this.message = quoteRespId;
}

QuoteRespID.prototype.value = function () {
  return this.message;
};

QuoteRespID.Tag = '693';

QuoteRespID.Type = 'STRING';

module.exports = QuoteRespID;