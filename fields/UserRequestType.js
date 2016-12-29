var invert = require('invert-obj');

function UserRequestType (userRequestType) {
  this.message = userRequestType;
}

UserRequestType.prototype.value = function () {
  return this.message;
};


UserRequestType.Keys = {
  'LOG_ON_USER': '1',
  'LOG_OFF_USER': '2',
  'CHANGE_PASSWORD_FOR_USER': '3',
  'REQUEST_INDIVIDUAL_USER_STATUS': '4',
};

UserRequestType.Tag = '924';

UserRequestType.Type = 'INT';

UserRequestType.Values = invert(UserRequestType.Keys);

module.exports = UserRequestType;