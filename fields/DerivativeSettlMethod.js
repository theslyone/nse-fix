var invert = require('invert-obj');

function DerivativeSettlMethod (derivativeSettlMethod) {
  this.message = derivativeSettlMethod;
}

DerivativeSettlMethod.prototype.value = function () {
  return this.message;
};

DerivativeSettlMethod.Tag = '1317';

DerivativeSettlMethod.Type = 'CHAR';

module.exports = DerivativeSettlMethod;