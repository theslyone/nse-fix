var NoSecurityAltID = require('../fields/NoSecurityAltID');
var SecurityAltID = require('../fields/SecurityAltID');
var SecurityAltIDSource = require('../fields/SecurityAltIDSource');

function SecAltIDGrp (secAltIdgrp) {
  this.message = secAltIdgrp;
}

/* group */

/* field */
SecAltIDGrp.prototype.securityAltId = function () {
  return new SecurityAltID(this.message.tags[SecurityAltID.Tag]);
};

/* field */
SecAltIDGrp.prototype.securityAltIdsource = function () {
  return new SecurityAltIDSource(this.message.tags[SecurityAltIDSource.Tag]);
};

/* end group */

SecAltIDGrp.Tag = '454';

module.exports = SecAltIDGrp;