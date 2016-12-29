var invert = require('invert-obj');

function AssignmentUnit (assignmentUnit) {
  this.message = assignmentUnit;
}

AssignmentUnit.prototype.value = function () {
  return this.message;
};

AssignmentUnit.Tag = '745';

AssignmentUnit.Type = 'QTY';

module.exports = AssignmentUnit;