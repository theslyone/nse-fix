var invert = require('invert-obj');

function PutOrCall (putOrCall) {
  this.message = putOrCall;
}

PutOrCall.prototype.value = function () {
  return this.message;
};


PutOrCall.Keys = {
  'PUT': '0',
  'CALL': '1',
};

PutOrCall.Tag = '201';

PutOrCall.Type = 'INT';

PutOrCall.Values = invert(PutOrCall.Keys);

module.exports = PutOrCall;