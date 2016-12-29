var invert = require('invert-obj');

function NetworkRequestID (networkRequestId) {
  this.message = networkRequestId;
}

NetworkRequestID.prototype.value = function () {
  return this.message;
};

NetworkRequestID.Tag = '933';

NetworkRequestID.Type = 'STRING';

module.exports = NetworkRequestID;