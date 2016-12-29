var invert = require('invert-obj');

function ExerciseStyle (exerciseStyle) {
  this.message = exerciseStyle;
}

ExerciseStyle.prototype.value = function () {
  return this.message;
};


ExerciseStyle.Keys = {
  'EUROPEAN': '0',
  'AMERICAN': '1',
  'BERMUDA': '2',
};

ExerciseStyle.Tag = '1194';

ExerciseStyle.Type = 'INT';

ExerciseStyle.Values = invert(ExerciseStyle.Keys);

module.exports = ExerciseStyle;