var UserRequestID = require('../fields/UserRequestID');
var Username = require('../fields/Username');
var UserStatus = require('../fields/UserStatus');
var UserStatusText = require('../fields/UserStatusText');

function UserResponse (userResponse) {
  this.message = userResponse;
}

UserResponse.prototype.userRequestId = function () {
  return new UserRequestID(this.message.tags[UserResponse.Tags.UserRequestID]);
};

UserResponse.prototype.username = function () {
  return new Username(this.message.tags[UserResponse.Tags.Username]);
};

UserResponse.prototype.userStatus = function () {
  return new UserStatus(this.message.tags[UserResponse.Tags.UserStatus]);
};

UserResponse.prototype.userStatusText = function () {
  return new UserStatusText(this.message.tags[UserResponse.Tags.UserStatusText]);
};

UserResponse.Tags = {
  UserRequestID: '923',
  Username: '553',
  UserStatus: '926',
  UserStatusText: '927',
};

UserResponse.msgType = 'BF';

module.exports = UserResponse;