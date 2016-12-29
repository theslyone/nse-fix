var invert = require('invert-obj');

function UnderlyingLegPutOrCall (underlyingLegPutOrCall) {
  this.message = underlyingLegPutOrCall;
}

UnderlyingLegPutOrCall.prototype.value = function () {
  return this.message;
};

UnderlyingLegPutOrCall.Tag = '1343';

UnderlyingLegPutOrCall.Type = 'INT';

module.exports = UnderlyingLegPutOrCall;