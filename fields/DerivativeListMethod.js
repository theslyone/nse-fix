var invert = require('invert-obj');

function DerivativeListMethod (derivativeListMethod) {
  this.message = derivativeListMethod;
}

DerivativeListMethod.prototype.value = function () {
  return this.message;
};

DerivativeListMethod.Tag = '1320';

DerivativeListMethod.Type = 'INT';

module.exports = DerivativeListMethod;