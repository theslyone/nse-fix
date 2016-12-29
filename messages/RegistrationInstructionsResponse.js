var Parties = require('../components/Parties');
var RegistID = require('../fields/RegistID');
var RegistTransType = require('../fields/RegistTransType');
var RegistRefID = require('../fields/RegistRefID');
var ClOrdID = require('../fields/ClOrdID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var RegistStatus = require('../fields/RegistStatus');
var RegistRejReasonCode = require('../fields/RegistRejReasonCode');
var RegistRejReasonText = require('../fields/RegistRejReasonText');

function RegistrationInstructionsResponse (registrationInstructionsResponse) {
  this.message = registrationInstructionsResponse;
}

RegistrationInstructionsResponse.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RegistrationInstructionsResponse.Tags.Parties] === undefined) return null;
  return this.message.groups[RegistrationInstructionsResponse.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RegistrationInstructionsResponse.prototype.registId = function () {
  return new RegistID(this.message.tags[RegistrationInstructionsResponse.Tags.RegistID]);
};

RegistrationInstructionsResponse.prototype.registTransType = function () {
  return new RegistTransType(this.message.tags[RegistrationInstructionsResponse.Tags.RegistTransType]);
};

RegistrationInstructionsResponse.prototype.registRefId = function () {
  return new RegistRefID(this.message.tags[RegistrationInstructionsResponse.Tags.RegistRefID]);
};

RegistrationInstructionsResponse.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[RegistrationInstructionsResponse.Tags.ClOrdID]);
};

RegistrationInstructionsResponse.prototype.account = function () {
  return new Account(this.message.tags[RegistrationInstructionsResponse.Tags.Account]);
};

RegistrationInstructionsResponse.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[RegistrationInstructionsResponse.Tags.AcctIDSource]);
};

RegistrationInstructionsResponse.prototype.registStatus = function () {
  return new RegistStatus(this.message.tags[RegistrationInstructionsResponse.Tags.RegistStatus]);
};

RegistrationInstructionsResponse.prototype.registRejReasonCode = function () {
  return new RegistRejReasonCode(this.message.tags[RegistrationInstructionsResponse.Tags.RegistRejReasonCode]);
};

RegistrationInstructionsResponse.prototype.registRejReasonText = function () {
  return new RegistRejReasonText(this.message.tags[RegistrationInstructionsResponse.Tags.RegistRejReasonText]);
};

RegistrationInstructionsResponse.Tags = {
  Parties: '453',
  RegistID: '513',
  RegistTransType: '514',
  RegistRefID: '508',
  ClOrdID: '11',
  Account: '1',
  AcctIDSource: '660',
  RegistStatus: '506',
  RegistRejReasonCode: '507',
  RegistRejReasonText: '496',
};

RegistrationInstructionsResponse.msgType = 'p';

module.exports = RegistrationInstructionsResponse;