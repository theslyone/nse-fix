var NoRootPartySubIDs = require('../fields/NoRootPartySubIDs');
var RootPartySubID = require('../fields/RootPartySubID');
var RootPartySubIDType = require('../fields/RootPartySubIDType');

function RootSubParties (rootSubParties) {
  this.message = rootSubParties;
}

/* group */

/* field */
RootSubParties.prototype.rootPartySubId = function () {
  return new RootPartySubID(this.message.tags[RootPartySubID.Tag]);
};

/* field */
RootSubParties.prototype.rootPartySubIdtype = function () {
  return new RootPartySubIDType(this.message.tags[RootPartySubIDType.Tag]);
};

/* end group */

RootSubParties.Tag = '1120';

module.exports = RootSubParties;