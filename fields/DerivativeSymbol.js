var invert = require('invert-obj');

function DerivativeSymbol (derivativeSymbol) {
  this.message = derivativeSymbol;
}

DerivativeSymbol.prototype.value = function () {
  return this.message;
};

DerivativeSymbol.Tag = '1214';

DerivativeSymbol.Type = 'STRING';

module.exports = DerivativeSymbol;