var invert = require('invert-obj');

function NetworkStatusResponseType (networkStatusResponseType) {
  this.message = networkStatusResponseType;
}

NetworkStatusResponseType.prototype.value = function () {
  return this.message;
};


NetworkStatusResponseType.Keys = {
  'FULL': '1',
  'INCREMENTAL_UPDATE': '2',
};

NetworkStatusResponseType.Tag = '937';

NetworkStatusResponseType.Type = 'INT';

NetworkStatusResponseType.Values = invert(NetworkStatusResponseType.Keys);

module.exports = NetworkStatusResponseType;