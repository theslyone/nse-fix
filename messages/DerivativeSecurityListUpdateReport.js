var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var DerivativeSecurityDefinition = require('../components/DerivativeSecurityDefinition');
var RelSymDerivSecUpdGrp = require('../components/RelSymDerivSecUpdGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var SecurityUpdateAction = require('../fields/SecurityUpdateAction');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function DerivativeSecurityListUpdateReport (derivativeSecurityListUpdateReport) {
  this.message = derivativeSecurityListUpdateReport;
}

DerivativeSecurityListUpdateReport.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListUpdateReport.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityListUpdateReport.prototype.derivativeSecurityDefinition = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListUpdateReport.Tags.DerivativeSecurityDefinition] === undefined) return null;
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.DerivativeSecurityDefinition]
    .map(function (derivativeSecurityDefinition) {
      return new DerivativeSecurityDefinition(derivativeSecurityDefinition);
  });
};

DerivativeSecurityListUpdateReport.prototype.relSymDerivSecUpdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListUpdateReport.Tags.RelSymDerivSecUpdGrp] === undefined) return null;
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.RelSymDerivSecUpdGrp]
    .map(function (relSymDerivSecUpdGrp) {
      return new RelSymDerivSecUpdGrp(relSymDerivSecUpdGrp);
  });
};

DerivativeSecurityListUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityListUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

DerivativeSecurityListUpdateReport.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityReqID]);
};

DerivativeSecurityListUpdateReport.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityResponseID]);
};

DerivativeSecurityListUpdateReport.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityRequestResult]);
};

DerivativeSecurityListUpdateReport.prototype.securityUpdateAction = function () {
  return new SecurityUpdateAction(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityUpdateAction]);
};

DerivativeSecurityListUpdateReport.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[DerivativeSecurityListUpdateReport.Tags.TotNoRelatedSym]);
};

DerivativeSecurityListUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[DerivativeSecurityListUpdateReport.Tags.LastFragment]);
};

DerivativeSecurityListUpdateReport.Tags = {
  UnderlyingInstrument: '311',
  DerivativeSecurityDefinition: '1214',
  RelSymDerivSecUpdGrp: '146',
  ApplicationSequenceControl: '1180',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  SecurityUpdateAction: '980',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

DerivativeSecurityListUpdateReport.msgType = 'BR';

module.exports = DerivativeSecurityListUpdateReport;