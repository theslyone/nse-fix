var invert = require('invert-obj');

function EmailThreadID (emailThreadId) {
  this.message = emailThreadId;
}

EmailThreadID.prototype.value = function () {
  return this.message;
};

EmailThreadID.Tag = '164';

EmailThreadID.Type = 'STRING';

module.exports = EmailThreadID;