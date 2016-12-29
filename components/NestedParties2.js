var NoNested2PartyIDs = require('../fields/NoNested2PartyIDs');
var NstdPtys2SubGrp = require('../components/NstdPtys2SubGrp');
var Nested2PartyID = require('../fields/Nested2PartyID');
var Nested2PartyIDSource = require('../fields/Nested2PartyIDSource');
var Nested2PartyRole = require('../fields/Nested2PartyRole');

function NestedParties2 (nestedParties2) {
  this.message = nestedParties2;
}

/* group */

/* component */
NestedParties2.prototype.nstdPtys2SubGrp = function () {
  return this.message.groups[NstdPtys2SubGrp.Tag]
    .map(function (nstdPtys2SubGrp) {
      return new NstdPtys2SubGrp(nstdPtys2SubGrp);
  });
};

/* field */
NestedParties2.prototype.nested2PartyId = function () {
  return new Nested2PartyID(this.message.tags[Nested2PartyID.Tag]);
};

/* field */
NestedParties2.prototype.nested2PartyIdsource = function () {
  return new Nested2PartyIDSource(this.message.tags[Nested2PartyIDSource.Tag]);
};

/* field */
NestedParties2.prototype.nested2PartyRole = function () {
  return new Nested2PartyRole(this.message.tags[Nested2PartyRole.Tag]);
};

/* end group */

NestedParties2.Tag = '756';

module.exports = NestedParties2;