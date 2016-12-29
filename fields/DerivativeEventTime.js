var invert = require('invert-obj');

function DerivativeEventTime (derivativeEventTime) {
  this.message = derivativeEventTime;
}

DerivativeEventTime.prototype.value = function () {
  return this.message;
};

DerivativeEventTime.Tag = '1289';

DerivativeEventTime.Type = 'UTCTIMESTAMP';

module.exports = DerivativeEventTime;