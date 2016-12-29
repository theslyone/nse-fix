var invert = require('invert-obj');

function DerivativeEventPx (derivativeEventPx) {
  this.message = derivativeEventPx;
}

DerivativeEventPx.prototype.value = function () {
  return this.message;
};

DerivativeEventPx.Tag = '1290';

DerivativeEventPx.Type = 'PRICE';

module.exports = DerivativeEventPx;