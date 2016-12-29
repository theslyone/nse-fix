var invert = require('invert-obj');

function DateOfBirth (dateOfBirth) {
  this.message = dateOfBirth;
}

DateOfBirth.prototype.value = function () {
  return this.message;
};

DateOfBirth.Tag = '486';

DateOfBirth.Type = 'LOCALMKTDATE';

module.exports = DateOfBirth;