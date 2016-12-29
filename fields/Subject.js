var invert = require('invert-obj');

function Subject (subject) {
  this.message = subject;
}

Subject.prototype.value = function () {
  return this.message;
};

Subject.Tag = '147';

Subject.Type = 'STRING';

module.exports = Subject;