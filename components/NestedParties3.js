var NoNested3PartyIDs = require('../fields/NoNested3PartyIDs');
var NstdPtys3SubGrp = require('../components/NstdPtys3SubGrp');
var Nested3PartyID = require('../fields/Nested3PartyID');
var Nested3PartyIDSource = require('../fields/Nested3PartyIDSource');
var Nested3PartyRole = require('../fields/Nested3PartyRole');

function NestedParties3 (nestedParties3) {
  this.message = nestedParties3;
}

/* group */

/* component */
NestedParties3.prototype.nstdPtys3SubGrp = function () {
  return this.message.groups[NstdPtys3SubGrp.Tag]
    .map(function (nstdPtys3SubGrp) {
      return new NstdPtys3SubGrp(nstdPtys3SubGrp);
  });
};

/* field */
NestedParties3.prototype.nested3PartyId = function () {
  return new Nested3PartyID(this.message.tags[Nested3PartyID.Tag]);
};

/* field */
NestedParties3.prototype.nested3PartyIdsource = function () {
  return new Nested3PartyIDSource(this.message.tags[Nested3PartyIDSource.Tag]);
};

/* field */
NestedParties3.prototype.nested3PartyRole = function () {
  return new Nested3PartyRole(this.message.tags[Nested3PartyRole.Tag]);
};

/* end group */

NestedParties3.Tag = '948';

module.exports = NestedParties3;