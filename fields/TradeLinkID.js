var invert = require('invert-obj');

function TradeLinkID (tradeLinkId) {
  this.message = tradeLinkId;
}

TradeLinkID.prototype.value = function () {
  return this.message;
};

TradeLinkID.Tag = '820';

TradeLinkID.Type = 'STRING';

module.exports = TradeLinkID;