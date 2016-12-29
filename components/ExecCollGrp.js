var NoExecs = require('../fields/NoExecs');
var ExecID = require('../fields/ExecID');

function ExecCollGrp (execCollGrp) {
  this.message = execCollGrp;
}

/* group */

/* field */
ExecCollGrp.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecID.Tag]);
};

/* end group */

ExecCollGrp.Tag = '124';

module.exports = ExecCollGrp;