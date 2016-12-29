var UserRequestID = require('../fields/UserRequestID');
var UserRequestType = require('../fields/UserRequestType');
var Username = require('../fields/Username');
var Password = require('../fields/Password');
var NewPassword = require('../fields/NewPassword');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');
var EncryptedPasswordMethod = require('../fields/EncryptedPasswordMethod');
var EncryptedPasswordLen = require('../fields/EncryptedPasswordLen');
var EncryptedPassword = require('../fields/EncryptedPassword');
var EncryptedNewPasswordLen = require('../fields/EncryptedNewPasswordLen');
var EncryptedNewPassword = require('../fields/EncryptedNewPassword');

function UserRequest (userRequest) {
  this.message = userRequest;
}

UserRequest.prototype.userRequestId = function () {
  return new UserRequestID(this.message.tags[UserRequest.Tags.UserRequestID]);
};

UserRequest.prototype.userRequestType = function () {
  return new UserRequestType(this.message.tags[UserRequest.Tags.UserRequestType]);
};

UserRequest.prototype.username = function () {
  return new Username(this.message.tags[UserRequest.Tags.Username]);
};

UserRequest.prototype.password = function () {
  return new Password(this.message.tags[UserRequest.Tags.Password]);
};

UserRequest.prototype.newPassword = function () {
  return new NewPassword(this.message.tags[UserRequest.Tags.NewPassword]);
};

UserRequest.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[UserRequest.Tags.RawDataLength]);
};

UserRequest.prototype.rawData = function () {
  return new RawData(this.message.tags[UserRequest.Tags.RawData]);
};

UserRequest.prototype.encryptedPasswordMethod = function () {
  return new EncryptedPasswordMethod(this.message.tags[UserRequest.Tags.EncryptedPasswordMethod]);
};

UserRequest.prototype.encryptedPasswordLen = function () {
  return new EncryptedPasswordLen(this.message.tags[UserRequest.Tags.EncryptedPasswordLen]);
};

UserRequest.prototype.encryptedPassword = function () {
  return new EncryptedPassword(this.message.tags[UserRequest.Tags.EncryptedPassword]);
};

UserRequest.prototype.encryptedNewPasswordLen = function () {
  return new EncryptedNewPasswordLen(this.message.tags[UserRequest.Tags.EncryptedNewPasswordLen]);
};

UserRequest.prototype.encryptedNewPassword = function () {
  return new EncryptedNewPassword(this.message.tags[UserRequest.Tags.EncryptedNewPassword]);
};

UserRequest.Tags = {
  UserRequestID: '923',
  UserRequestType: '924',
  Username: '553',
  Password: '554',
  NewPassword: '925',
  RawDataLength: '95',
  RawData: '96',
  EncryptedPasswordMethod: '1400',
  EncryptedPasswordLen: '1401',
  EncryptedPassword: '1402',
  EncryptedNewPasswordLen: '1403',
  EncryptedNewPassword: '1404',
};

UserRequest.msgType = 'BE';

module.exports = UserRequest;