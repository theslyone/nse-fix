var invert = require('invert-obj');

function SessionStatus (sessionStatus) {
  this.message = sessionStatus;
}

SessionStatus.prototype.value = function () {
  return this.message;
};


SessionStatus.Keys = {
  'SESSION_ACTIVE': '0',
  'SESSION_PASSWORD_CHANGED': '1',
  'SESSION_PASSWORD_DUE_TO_EXPIRE': '2',
  'NEW_SESSION_PASSWORD_DOES_NOT_COMPLY_WITH_POLICY': '3',
  'SESSION_LOGOUT_COMPLETE': '4',
  'INVALID_USERNAME_OR_PASSWORD': '5',
  'ACCOUNT_LOCKED': '6',
  'LOGONS_ARE_NOT_ALLOWED_AT_THIS_TIME': '7',
  'PASSWORD_EXPIRED': '8',
};

SessionStatus.Tag = '1409';

SessionStatus.Type = 'INT';

SessionStatus.Values = invert(SessionStatus.Keys);

module.exports = SessionStatus;