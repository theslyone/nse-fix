var Parties = require('../components/Parties');
var RgstDtlsGrp = require('../components/RgstDtlsGrp');
var RgstDistInstGrp = require('../components/RgstDistInstGrp');
var RegistID = require('../fields/RegistID');
var RegistTransType = require('../fields/RegistTransType');
var RegistRefID = require('../fields/RegistRefID');
var ClOrdID = require('../fields/ClOrdID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var RegistAcctType = require('../fields/RegistAcctType');
var TaxAdvantageType = require('../fields/TaxAdvantageType');
var OwnershipType = require('../fields/OwnershipType');

function RegistrationInstructions (registrationInstructions) {
  this.message = registrationInstructions;
}

RegistrationInstructions.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RegistrationInstructions.Tags.Parties] === undefined) return null;
  return this.message.groups[RegistrationInstructions.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RegistrationInstructions.prototype.rgstDtlsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RegistrationInstructions.Tags.RgstDtlsGrp] === undefined) return null;
  return this.message.groups[RegistrationInstructions.Tags.RgstDtlsGrp]
    .map(function (rgstDtlsGrp) {
      return new RgstDtlsGrp(rgstDtlsGrp);
  });
};

RegistrationInstructions.prototype.rgstDistInstGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RegistrationInstructions.Tags.RgstDistInstGrp] === undefined) return null;
  return this.message.groups[RegistrationInstructions.Tags.RgstDistInstGrp]
    .map(function (rgstDistInstGrp) {
      return new RgstDistInstGrp(rgstDistInstGrp);
  });
};

RegistrationInstructions.prototype.registId = function () {
  return new RegistID(this.message.tags[RegistrationInstructions.Tags.RegistID]);
};

RegistrationInstructions.prototype.registTransType = function () {
  return new RegistTransType(this.message.tags[RegistrationInstructions.Tags.RegistTransType]);
};

RegistrationInstructions.prototype.registRefId = function () {
  return new RegistRefID(this.message.tags[RegistrationInstructions.Tags.RegistRefID]);
};

RegistrationInstructions.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[RegistrationInstructions.Tags.ClOrdID]);
};

RegistrationInstructions.prototype.account = function () {
  return new Account(this.message.tags[RegistrationInstructions.Tags.Account]);
};

RegistrationInstructions.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[RegistrationInstructions.Tags.AcctIDSource]);
};

RegistrationInstructions.prototype.registAcctType = function () {
  return new RegistAcctType(this.message.tags[RegistrationInstructions.Tags.RegistAcctType]);
};

RegistrationInstructions.prototype.taxAdvantageType = function () {
  return new TaxAdvantageType(this.message.tags[RegistrationInstructions.Tags.TaxAdvantageType]);
};

RegistrationInstructions.prototype.ownershipType = function () {
  return new OwnershipType(this.message.tags[RegistrationInstructions.Tags.OwnershipType]);
};

RegistrationInstructions.Tags = {
  Parties: '453',
  RgstDtlsGrp: '473',
  RgstDistInstGrp: '510',
  RegistID: '513',
  RegistTransType: '514',
  RegistRefID: '508',
  ClOrdID: '11',
  Account: '1',
  AcctIDSource: '660',
  RegistAcctType: '493',
  TaxAdvantageType: '495',
  OwnershipType: '517',
};

RegistrationInstructions.msgType = 'o';

module.exports = RegistrationInstructions;