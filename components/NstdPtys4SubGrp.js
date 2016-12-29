var NoNested4PartySubIDs = require('../fields/NoNested4PartySubIDs');
var Nested4PartySubID = require('../fields/Nested4PartySubID');
var Nested4PartySubIDType = require('../fields/Nested4PartySubIDType');

function NstdPtys4SubGrp (nstdPtys4SubGrp) {
  this.message = nstdPtys4SubGrp;
}

/* group */

/* field */
NstdPtys4SubGrp.prototype.nested4PartySubId = function () {
  return new Nested4PartySubID(this.message.tags[Nested4PartySubID.Tag]);
};

/* field */
NstdPtys4SubGrp.prototype.nested4PartySubIdtype = function () {
  return new Nested4PartySubIDType(this.message.tags[Nested4PartySubIDType.Tag]);
};

/* end group */

NstdPtys4SubGrp.Tag = '1413';

module.exports = NstdPtys4SubGrp;