var invert = require('invert-obj');

function DerivativePriceQuoteMethod (derivativePriceQuoteMethod) {
  this.message = derivativePriceQuoteMethod;
}

DerivativePriceQuoteMethod.prototype.value = function () {
  return this.message;
};

DerivativePriceQuoteMethod.Tag = '1318';

DerivativePriceQuoteMethod.Type = 'STRING';

module.exports = DerivativePriceQuoteMethod;