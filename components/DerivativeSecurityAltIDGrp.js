var NoDerivativeSecurityAltID = require('../fields/NoDerivativeSecurityAltID');
var DerivativeSecurityAltID = require('../fields/DerivativeSecurityAltID');
var DerivativeSecurityAltIDSource = require('../fields/DerivativeSecurityAltIDSource');

function DerivativeSecurityAltIDGrp (derivativeSecurityAltIdgrp) {
  this.message = derivativeSecurityAltIdgrp;
}

/* group */

/* field */
DerivativeSecurityAltIDGrp.prototype.derivativeSecurityAltId = function () {
  return new DerivativeSecurityAltID(this.message.tags[DerivativeSecurityAltID.Tag]);
};

/* field */
DerivativeSecurityAltIDGrp.prototype.derivativeSecurityAltIdsource = function () {
  return new DerivativeSecurityAltIDSource(this.message.tags[DerivativeSecurityAltIDSource.Tag]);
};

/* end group */

DerivativeSecurityAltIDGrp.Tag = '1218';

module.exports = DerivativeSecurityAltIDGrp;