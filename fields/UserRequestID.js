var invert = require('invert-obj');

function UserRequestID (userRequestId) {
  this.message = userRequestId;
}

UserRequestID.prototype.value = function () {
  return this.message;
};

UserRequestID.Tag = '923';

UserRequestID.Type = 'STRING';

module.exports = UserRequestID;