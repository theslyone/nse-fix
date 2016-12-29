var NoUnderlyingLegSecurityAltID = require('../fields/NoUnderlyingLegSecurityAltID');
var UnderlyingLegSecurityAltID = require('../fields/UnderlyingLegSecurityAltID');
var UnderlyingLegSecurityAltIDSource = require('../fields/UnderlyingLegSecurityAltIDSource');

function UnderlyingLegSecurityAltIDGrp (underlyingLegSecurityAltIdgrp) {
  this.message = underlyingLegSecurityAltIdgrp;
}

/* group */

/* field */
UnderlyingLegSecurityAltIDGrp.prototype.underlyingLegSecurityAltId = function () {
  return new UnderlyingLegSecurityAltID(this.message.tags[UnderlyingLegSecurityAltID.Tag]);
};

/* field */
UnderlyingLegSecurityAltIDGrp.prototype.underlyingLegSecurityAltIdsource = function () {
  return new UnderlyingLegSecurityAltIDSource(this.message.tags[UnderlyingLegSecurityAltIDSource.Tag]);
};

/* end group */

UnderlyingLegSecurityAltIDGrp.Tag = '1334';

module.exports = UnderlyingLegSecurityAltIDGrp;