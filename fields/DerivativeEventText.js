var invert = require('invert-obj');

function DerivativeEventText (derivativeEventText) {
  this.message = derivativeEventText;
}

DerivativeEventText.prototype.value = function () {
  return this.message;
};

DerivativeEventText.Tag = '1291';

DerivativeEventText.Type = 'STRING';

module.exports = DerivativeEventText;