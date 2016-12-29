var invert = require('invert-obj');

function NewPassword (newPassword) {
  this.message = newPassword;
}

NewPassword.prototype.value = function () {
  return this.message;
};

NewPassword.Tag = '925';

NewPassword.Type = 'STRING';

module.exports = NewPassword;