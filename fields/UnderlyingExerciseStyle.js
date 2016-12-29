var invert = require('invert-obj');

function UnderlyingExerciseStyle (underlyingExerciseStyle) {
  this.message = underlyingExerciseStyle;
}

UnderlyingExerciseStyle.prototype.value = function () {
  return this.message;
};

UnderlyingExerciseStyle.Tag = '1419';

UnderlyingExerciseStyle.Type = 'INT';

module.exports = UnderlyingExerciseStyle;