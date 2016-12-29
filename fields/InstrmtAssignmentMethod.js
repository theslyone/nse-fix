var invert = require('invert-obj');

function InstrmtAssignmentMethod (instrmtAssignmentMethod) {
  this.message = instrmtAssignmentMethod;
}

InstrmtAssignmentMethod.prototype.value = function () {
  return this.message;
};

InstrmtAssignmentMethod.Tag = '1049';

InstrmtAssignmentMethod.Type = 'CHAR';

module.exports = InstrmtAssignmentMethod;