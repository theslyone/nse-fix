var NoOfSecSizes = require('../fields/NoOfSecSizes');
var MDSecSizeType = require('../fields/MDSecSizeType');
var MDSecSize = require('../fields/MDSecSize');

function SecSizesGrp (secSizesGrp) {
  this.message = secSizesGrp;
}

/* group */

/* field */
SecSizesGrp.prototype.mdsecSizeType = function () {
  return new MDSecSizeType(this.message.tags[MDSecSizeType.Tag]);
};

/* field */
SecSizesGrp.prototype.mdsecSize = function () {
  return new MDSecSize(this.message.tags[MDSecSize.Tag]);
};

/* end group */

SecSizesGrp.Tag = '1177';

module.exports = SecSizesGrp;