var invert = require('invert-obj');

function NetworkResponseID (networkResponseId) {
  this.message = networkResponseId;
}

NetworkResponseID.prototype.value = function () {
  return this.message;
};

NetworkResponseID.Tag = '932';

NetworkResponseID.Type = 'STRING';

module.exports = NetworkResponseID;