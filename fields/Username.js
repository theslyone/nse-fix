var invert = require('invert-obj');

function Username (username) {
  this.message = username;
}

Username.prototype.value = function () {
  return this.message;
};

Username.Tag = '553';

Username.Type = 'STRING';

module.exports = Username;