var invert = require('invert-obj');

function NetworkRequestType (networkRequestType) {
  this.message = networkRequestType;
}

NetworkRequestType.prototype.value = function () {
  return this.message;
};


NetworkRequestType.Keys = {
  'SNAPSHOT': '1',
  'SUBSCRIBE': '2',
  'STOP_SUBSCRIBING': '4',
  'LEVEL_OF_DETAIL_THEN_NOCOMPIDS_BECOMES_REQUIRED': '8',
};

NetworkRequestType.Tag = '935';

NetworkRequestType.Type = 'INT';

NetworkRequestType.Values = invert(NetworkRequestType.Keys);

module.exports = NetworkRequestType;