var NoNested4PartyIDs = require('../fields/NoNested4PartyIDs');
var NstdPtys4SubGrp = require('../components/NstdPtys4SubGrp');
var Nested4PartyID = require('../fields/Nested4PartyID');
var Nested4PartyIDSource = require('../fields/Nested4PartyIDSource');
var Nested4PartyRole = require('../fields/Nested4PartyRole');

function NestedParties4 (nestedParties4) {
  this.message = nestedParties4;
}

/* group */

/* component */
NestedParties4.prototype.nstdPtys4SubGrp = function () {
  return this.message.groups[NstdPtys4SubGrp.Tag]
    .map(function (nstdPtys4SubGrp) {
      return new NstdPtys4SubGrp(nstdPtys4SubGrp);
  });
};

/* field */
NestedParties4.prototype.nested4PartyId = function () {
  return new Nested4PartyID(this.message.tags[Nested4PartyID.Tag]);
};

/* field */
NestedParties4.prototype.nested4PartyIdsource = function () {
  return new Nested4PartyIDSource(this.message.tags[Nested4PartyIDSource.Tag]);
};

/* field */
NestedParties4.prototype.nested4PartyRole = function () {
  return new Nested4PartyRole(this.message.tags[Nested4PartyRole.Tag]);
};

/* end group */

NestedParties4.Tag = '1414';

module.exports = NestedParties4;