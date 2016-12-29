var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var RelSymDerivSecGrp = require('../components/RelSymDerivSecGrp');
var DerivativeSecurityDefinition = require('../components/DerivativeSecurityDefinition');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function DerivativeSecurityList (derivativeSecurityList) {
  this.message = derivativeSecurityList;
}

DerivativeSecurityList.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityList.prototype.relSymDerivSecGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.RelSymDerivSecGrp] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.RelSymDerivSecGrp]
    .map(function (relSymDerivSecGrp) {
      return new RelSymDerivSecGrp(relSymDerivSecGrp);
  });
};

DerivativeSecurityList.prototype.derivativeSecurityDefinition = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.DerivativeSecurityDefinition] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.DerivativeSecurityDefinition]
    .map(function (derivativeSecurityDefinition) {
      return new DerivativeSecurityDefinition(derivativeSecurityDefinition);
  });
};

DerivativeSecurityList.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

DerivativeSecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityList.Tags.SecurityReqID]);
};

DerivativeSecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[DerivativeSecurityList.Tags.SecurityResponseID]);
};

DerivativeSecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[DerivativeSecurityList.Tags.SecurityRequestResult]);
};

DerivativeSecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[DerivativeSecurityList.Tags.TotNoRelatedSym]);
};

DerivativeSecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[DerivativeSecurityList.Tags.LastFragment]);
};

DerivativeSecurityList.Tags = {
  UnderlyingInstrument: '311',
  RelSymDerivSecGrp: '146',
  DerivativeSecurityDefinition: '1214',
  ApplicationSequenceControl: '1180',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

DerivativeSecurityList.msgType = 'AA';

module.exports = DerivativeSecurityList;