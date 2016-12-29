var NoNestedPartySubIDs = require('../fields/NoNestedPartySubIDs');
var NestedPartySubID = require('../fields/NestedPartySubID');
var NestedPartySubIDType = require('../fields/NestedPartySubIDType');

function NstdPtysSubGrp (nstdPtysSubGrp) {
  this.message = nstdPtysSubGrp;
}

/* group */

/* field */
NstdPtysSubGrp.prototype.nestedPartySubId = function () {
  return new NestedPartySubID(this.message.tags[NestedPartySubID.Tag]);
};

/* field */
NstdPtysSubGrp.prototype.nestedPartySubIdtype = function () {
  return new NestedPartySubIDType(this.message.tags[NestedPartySubIDType.Tag]);
};

/* end group */

NstdPtysSubGrp.Tag = '804';

module.exports = NstdPtysSubGrp;