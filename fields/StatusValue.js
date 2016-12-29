var invert = require('invert-obj');

function StatusValue (statusValue) {
  this.message = statusValue;
}

StatusValue.prototype.value = function () {
  return this.message;
};


StatusValue.Keys = {
  'CONNECTED': '1',
  'NOT_CONNECTED_2': '2',
  'NOT_CONNECTED_3': '3',
  'IN_PROCESS': '4',
};

StatusValue.Tag = '928';

StatusValue.Type = 'INT';

StatusValue.Values = invert(StatusValue.Keys);

module.exports = StatusValue;