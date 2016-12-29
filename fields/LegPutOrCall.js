var invert = require('invert-obj');

function LegPutOrCall (legPutOrCall) {
  this.message = legPutOrCall;
}

LegPutOrCall.prototype.value = function () {
  return this.message;
};

LegPutOrCall.Tag = '1358';

LegPutOrCall.Type = 'INT';

module.exports = LegPutOrCall;