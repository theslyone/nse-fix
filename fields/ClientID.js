var invert = require('invert-obj');

function ClientID (clientId) {
  this.message = clientId;
}

ClientID.prototype.value = function () {
  return this.message;
};

ClientID.Tag = '109';

ClientID.Type = 'STRING';

module.exports = ClientID;