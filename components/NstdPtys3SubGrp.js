var NoNested3PartySubIDs = require('../fields/NoNested3PartySubIDs');
var Nested3PartySubID = require('../fields/Nested3PartySubID');
var Nested3PartySubIDType = require('../fields/Nested3PartySubIDType');

function NstdPtys3SubGrp (nstdPtys3SubGrp) {
  this.message = nstdPtys3SubGrp;
}

/* group */

/* field */
NstdPtys3SubGrp.prototype.nested3PartySubId = function () {
  return new Nested3PartySubID(this.message.tags[Nested3PartySubID.Tag]);
};

/* field */
NstdPtys3SubGrp.prototype.nested3PartySubIdtype = function () {
  return new Nested3PartySubIDType(this.message.tags[Nested3PartySubIDType.Tag]);
};

/* end group */

NstdPtys3SubGrp.Tag = '952';

module.exports = NstdPtys3SubGrp;