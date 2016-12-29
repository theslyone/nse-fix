var invert = require('invert-obj');

function UserStatus (userStatus) {
  this.message = userStatus;
}

UserStatus.prototype.value = function () {
  return this.message;
};


UserStatus.Keys = {
  'LOGGED_IN': '1',
  'NOT_LOGGED_IN': '2',
  'USER_NOT_RECOGNISED': '3',
  'PASSWORD_INCORRECT': '4',
  'PASSWORD_CHANGED': '5',
  'OTHER': '6',
  'FORCED_USER_LOGOUT_BY_EXCHANGE': '7',
  'SESSION_SHUTDOWN_WARNING': '8',
};

UserStatus.Tag = '926';

UserStatus.Type = 'INT';

UserStatus.Values = invert(UserStatus.Keys);

module.exports = UserStatus;