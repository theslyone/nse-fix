var invert = require('invert-obj');

function UserStatusText (userStatusText) {
  this.message = userStatusText;
}

UserStatusText.prototype.value = function () {
  return this.message;
};

UserStatusText.Tag = '927';

UserStatusText.Type = 'STRING';

module.exports = UserStatusText;