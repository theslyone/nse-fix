var invert = require('invert-obj');

function DerivativeProductComplex (derivativeProductComplex) {
  this.message = derivativeProductComplex;
}

DerivativeProductComplex.prototype.value = function () {
  return this.message;
};

DerivativeProductComplex.Tag = '1228';

DerivativeProductComplex.Type = 'STRING';

module.exports = DerivativeProductComplex;