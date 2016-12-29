var invert = require('invert-obj');

function ExerciseMethod (exerciseMethod) {
  this.message = exerciseMethod;
}

ExerciseMethod.prototype.value = function () {
  return this.message;
};


ExerciseMethod.Keys = {
  'AUTOMATIC': 'A',
  'MANUAL': 'M',
};

ExerciseMethod.Tag = '747';

ExerciseMethod.Type = 'CHAR';

ExerciseMethod.Values = invert(ExerciseMethod.Keys);

module.exports = ExerciseMethod;