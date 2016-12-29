var invert = require('invert-obj');

function ClientBidID (clientBidId) {
  this.message = clientBidId;
}

ClientBidID.prototype.value = function () {
  return this.message;
};

ClientBidID.Tag = '391';

ClientBidID.Type = 'STRING';

module.exports = ClientBidID;