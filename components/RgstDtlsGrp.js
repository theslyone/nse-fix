var NoRegistDtls = require('../fields/NoRegistDtls');
var NestedParties = require('../components/NestedParties');
var RegistDtls = require('../fields/RegistDtls');
var RegistEmail = require('../fields/RegistEmail');
var MailingDtls = require('../fields/MailingDtls');
var MailingInst = require('../fields/MailingInst');
var OwnerType = require('../fields/OwnerType');
var DateOfBirth = require('../fields/DateOfBirth');
var InvestorCountryOfResidence = require('../fields/InvestorCountryOfResidence');

function RgstDtlsGrp (rgstDtlsGrp) {
  this.message = rgstDtlsGrp;
}

/* group */

/* component */
RgstDtlsGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
RgstDtlsGrp.prototype.registDtls = function () {
  return new RegistDtls(this.message.tags[RegistDtls.Tag]);
};

/* field */
RgstDtlsGrp.prototype.registEmail = function () {
  return new RegistEmail(this.message.tags[RegistEmail.Tag]);
};

/* field */
RgstDtlsGrp.prototype.mailingDtls = function () {
  return new MailingDtls(this.message.tags[MailingDtls.Tag]);
};

/* field */
RgstDtlsGrp.prototype.mailingInst = function () {
  return new MailingInst(this.message.tags[MailingInst.Tag]);
};

/* field */
RgstDtlsGrp.prototype.ownerType = function () {
  return new OwnerType(this.message.tags[OwnerType.Tag]);
};

/* field */
RgstDtlsGrp.prototype.dateOfBirth = function () {
  return new DateOfBirth(this.message.tags[DateOfBirth.Tag]);
};

/* field */
RgstDtlsGrp.prototype.investorCountryOfResidence = function () {
  return new InvestorCountryOfResidence(this.message.tags[InvestorCountryOfResidence.Tag]);
};

/* end group */

RgstDtlsGrp.Tag = '473';

module.exports = RgstDtlsGrp;