var NoNested2PartySubIDs = require('../fields/NoNested2PartySubIDs');
var Nested2PartySubID = require('../fields/Nested2PartySubID');
var Nested2PartySubIDType = require('../fields/Nested2PartySubIDType');

function NstdPtys2SubGrp (nstdPtys2SubGrp) {
  this.message = nstdPtys2SubGrp;
}

/* group */

/* field */
NstdPtys2SubGrp.prototype.nested2PartySubId = function () {
  return new Nested2PartySubID(this.message.tags[Nested2PartySubID.Tag]);
};

/* field */
NstdPtys2SubGrp.prototype.nested2PartySubIdtype = function () {
  return new Nested2PartySubIDType(this.message.tags[Nested2PartySubIDType.Tag]);
};

/* end group */

NstdPtys2SubGrp.Tag = '806';

module.exports = NstdPtys2SubGrp;