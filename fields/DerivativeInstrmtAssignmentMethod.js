var invert = require('invert-obj');

function DerivativeInstrmtAssignmentMethod (derivativeInstrmtAssignmentMethod) {
  this.message = derivativeInstrmtAssignmentMethod;
}

DerivativeInstrmtAssignmentMethod.prototype.value = function () {
  return this.message;
};

DerivativeInstrmtAssignmentMethod.Tag = '1255';

DerivativeInstrmtAssignmentMethod.Type = 'CHAR';

module.exports = DerivativeInstrmtAssignmentMethod;