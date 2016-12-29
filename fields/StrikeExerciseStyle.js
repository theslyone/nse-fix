var invert = require('invert-obj');

function StrikeExerciseStyle (strikeExerciseStyle) {
  this.message = strikeExerciseStyle;
}

StrikeExerciseStyle.prototype.value = function () {
  return this.message;
};

StrikeExerciseStyle.Tag = '1304';

StrikeExerciseStyle.Type = 'INT';

module.exports = StrikeExerciseStyle;