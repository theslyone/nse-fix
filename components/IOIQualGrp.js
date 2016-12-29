var NoIOIQualifiers = require('../fields/NoIOIQualifiers');
var IOIQualifier = require('../fields/IOIQualifier');

function IOIQualGrp (ioiqualGrp) {
  this.message = ioiqualGrp;
}

/* group */

/* field */
IOIQualGrp.prototype.ioiqualifier = function () {
  return new IOIQualifier(this.message.tags[IOIQualifier.Tag]);
};

/* end group */

IOIQualGrp.Tag = '199';

module.exports = IOIQualGrp;