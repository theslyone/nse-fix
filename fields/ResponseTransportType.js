var invert = require('invert-obj');

function ResponseTransportType (responseTransportType) {
  this.message = responseTransportType;
}

ResponseTransportType.prototype.value = function () {
  return this.message;
};


ResponseTransportType.Keys = {
  'INBAND': '0',
  'OUT_OF_BAND': '1',
};

ResponseTransportType.Tag = '725';

ResponseTransportType.Type = 'INT';

ResponseTransportType.Values = invert(ResponseTransportType.Keys);

module.exports = ResponseTransportType;