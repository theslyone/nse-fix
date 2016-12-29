var NoUnderlyingSecurityAltID = require('../fields/NoUnderlyingSecurityAltID');
var UnderlyingSecurityAltID = require('../fields/UnderlyingSecurityAltID');
var UnderlyingSecurityAltIDSource = require('../fields/UnderlyingSecurityAltIDSource');

function UndSecAltIDGrp (undSecAltIdgrp) {
  this.message = undSecAltIdgrp;
}

/* group */

/* field */
UndSecAltIDGrp.prototype.underlyingSecurityAltId = function () {
  return new UnderlyingSecurityAltID(this.message.tags[UnderlyingSecurityAltID.Tag]);
};

/* field */
UndSecAltIDGrp.prototype.underlyingSecurityAltIdsource = function () {
  return new UnderlyingSecurityAltIDSource(this.message.tags[UnderlyingSecurityAltIDSource.Tag]);
};

/* end group */

UndSecAltIDGrp.Tag = '457';

module.exports = UndSecAltIDGrp;