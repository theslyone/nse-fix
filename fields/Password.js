var invert = require('invert-obj');

function Password (password) {
  this.message = password;
}

Password.prototype.value = function () {
  return this.message;
};

Password.Tag = '554';

Password.Type = 'STRING';

module.exports = Password;