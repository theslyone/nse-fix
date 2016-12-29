var invert = require('invert-obj');

function LegExerciseStyle (legExerciseStyle) {
  this.message = legExerciseStyle;
}

LegExerciseStyle.prototype.value = function () {
  return this.message;
};

LegExerciseStyle.Tag = '1420';

LegExerciseStyle.Type = 'INT';

module.exports = LegExerciseStyle;