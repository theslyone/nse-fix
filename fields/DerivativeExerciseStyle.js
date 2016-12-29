var invert = require('invert-obj');

function DerivativeExerciseStyle (derivativeExerciseStyle) {
  this.message = derivativeExerciseStyle;
}

DerivativeExerciseStyle.prototype.value = function () {
  return this.message;
};

DerivativeExerciseStyle.Tag = '1299';

DerivativeExerciseStyle.Type = 'CHAR';

module.exports = DerivativeExerciseStyle;