var invert = require('invert-obj');

function ClOrdLinkID (clOrdLinkId) {
  this.message = clOrdLinkId;
}

ClOrdLinkID.prototype.value = function () {
  return this.message;
};

ClOrdLinkID.Tag = '583';

ClOrdLinkID.Type = 'STRING';

module.exports = ClOrdLinkID;