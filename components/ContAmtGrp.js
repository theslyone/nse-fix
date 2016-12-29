var NoContAmts = require('../fields/NoContAmts');
var ContAmtType = require('../fields/ContAmtType');
var ContAmtValue = require('../fields/ContAmtValue');
var ContAmtCurr = require('../fields/ContAmtCurr');

function ContAmtGrp (contAmtGrp) {
  this.message = contAmtGrp;
}

/* group */

/* field */
ContAmtGrp.prototype.contAmtType = function () {
  return new ContAmtType(this.message.tags[ContAmtType.Tag]);
};

/* field */
ContAmtGrp.prototype.contAmtValue = function () {
  return new ContAmtValue(this.message.tags[ContAmtValue.Tag]);
};

/* field */
ContAmtGrp.prototype.contAmtCurr = function () {
  return new ContAmtCurr(this.message.tags[ContAmtCurr.Tag]);
};

/* end group */

ContAmtGrp.Tag = '518';

module.exports = ContAmtGrp;