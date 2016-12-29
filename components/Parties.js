var NoPartyIDs = require('../fields/NoPartyIDs');
var PtysSubGrp = require('../components/PtysSubGrp');
var PartyID = require('../fields/PartyID');
var PartyIDSource = require('../fields/PartyIDSource');
var PartyRole = require('../fields/PartyRole');

function Parties (parties) {
  this.message = parties;
}

/* group */

/* component */
Parties.prototype.ptysSubGrp = function () {
  return this.message.groups[PtysSubGrp.Tag]
    .map(function (ptysSubGrp) {
      return new PtysSubGrp(ptysSubGrp);
  });
};

/* field */
Parties.prototype.partyId = function () {
  return new PartyID(this.message.tags[PartyID.Tag]);
};

/* field */
Parties.prototype.partyIdsource = function () {
  return new PartyIDSource(this.message.tags[PartyIDSource.Tag]);
};

/* field */
Parties.prototype.partyRole = function () {
  return new PartyRole(this.message.tags[PartyRole.Tag]);
};

/* end group */

Parties.Tag = '453';

module.exports = Parties;