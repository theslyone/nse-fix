var NoSettlPartySubIDs = require('../fields/NoSettlPartySubIDs');
var SettlPartySubID = require('../fields/SettlPartySubID');
var SettlPartySubIDType = require('../fields/SettlPartySubIDType');

function SettlPtysSubGrp (settlPtysSubGrp) {
  this.message = settlPtysSubGrp;
}

/* group */

/* field */
SettlPtysSubGrp.prototype.settlPartySubId = function () {
  return new SettlPartySubID(this.message.tags[SettlPartySubID.Tag]);
};

/* field */
SettlPtysSubGrp.prototype.settlPartySubIdtype = function () {
  return new SettlPartySubIDType(this.message.tags[SettlPartySubIDType.Tag]);
};

/* end group */

SettlPtysSubGrp.Tag = '801';

module.exports = SettlPtysSubGrp;