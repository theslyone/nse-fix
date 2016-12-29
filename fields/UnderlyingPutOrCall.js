var invert = require('invert-obj');

function UnderlyingPutOrCall (underlyingPutOrCall) {
  this.message = underlyingPutOrCall;
}

UnderlyingPutOrCall.prototype.value = function () {
  return this.message;
};

UnderlyingPutOrCall.Tag = '315';

UnderlyingPutOrCall.Type = 'INT';

module.exports = UnderlyingPutOrCall;