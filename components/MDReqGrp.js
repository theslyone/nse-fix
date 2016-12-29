var NoMDEntryTypes = require('../fields/NoMDEntryTypes');
var MDEntryType = require('../fields/MDEntryType');

function MDReqGrp (mdreqGrp) {
  this.message = mdreqGrp;
}

/* group */

/* field */
MDReqGrp.prototype.mdentryType = function () {
  return new MDEntryType(this.message.tags[MDEntryType.Tag]);
};

/* end group */

MDReqGrp.Tag = '267';

module.exports = MDReqGrp;