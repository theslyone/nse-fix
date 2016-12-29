var NoLegSecurityAltID = require('../fields/NoLegSecurityAltID');
var LegSecurityAltID = require('../fields/LegSecurityAltID');
var LegSecurityAltIDSource = require('../fields/LegSecurityAltIDSource');

function LegSecAltIDGrp (legSecAltIdgrp) {
  this.message = legSecAltIdgrp;
}

/* group */

/* field */
LegSecAltIDGrp.prototype.legSecurityAltId = function () {
  return new LegSecurityAltID(this.message.tags[LegSecurityAltID.Tag]);
};

/* field */
LegSecAltIDGrp.prototype.legSecurityAltIdsource = function () {
  return new LegSecurityAltIDSource(this.message.tags[LegSecurityAltIDSource.Tag]);
};

/* end group */

LegSecAltIDGrp.Tag = '604';

module.exports = LegSecAltIDGrp;