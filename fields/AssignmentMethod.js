var invert = require('invert-obj');

function AssignmentMethod (assignmentMethod) {
  this.message = assignmentMethod;
}

AssignmentMethod.prototype.value = function () {
  return this.message;
};


AssignmentMethod.Keys = {
  'PRO_RATA': 'P',
  'RANDOM': 'R',
};

AssignmentMethod.Tag = '744';

AssignmentMethod.Type = 'CHAR';

AssignmentMethod.Values = invert(AssignmentMethod.Keys);

module.exports = AssignmentMethod;