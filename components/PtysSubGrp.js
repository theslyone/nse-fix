var NoPartySubIDs = require('../fields/NoPartySubIDs');
var PartySubID = require('../fields/PartySubID');
var PartySubIDType = require('../fields/PartySubIDType');

function PtysSubGrp (ptysSubGrp) {
  this.message = ptysSubGrp;
}

/* group */

/* field */
PtysSubGrp.prototype.partySubId = function () {
  return new PartySubID(this.message.tags[PartySubID.Tag]);
};

/* field */
PtysSubGrp.prototype.partySubIdtype = function () {
  return new PartySubIDType(this.message.tags[PartySubIDType.Tag]);
};

/* end group */

PtysSubGrp.Tag = '802';

module.exports = PtysSubGrp;