var invert = require('invert-obj');

function DerivativeOptAttribute (derivativeOptAttribute) {
  this.message = derivativeOptAttribute;
}

DerivativeOptAttribute.prototype.value = function () {
  return this.message;
};

DerivativeOptAttribute.Tag = '1265';

DerivativeOptAttribute.Type = 'CHAR';

module.exports = DerivativeOptAttribute;