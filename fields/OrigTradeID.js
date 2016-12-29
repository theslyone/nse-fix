var invert = require('invert-obj');

function OrigTradeID (origTradeId) {
  this.message = origTradeId;
}

OrigTradeID.prototype.value = function () {
  return this.message;
};

OrigTradeID.Tag = '1126';

OrigTradeID.Type = 'STRING';

module.exports = OrigTradeID;