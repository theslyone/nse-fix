var NoNestedPartyIDs = require('../fields/NoNestedPartyIDs');
var NstdPtysSubGrp = require('../components/NstdPtysSubGrp');
var NestedPartyID = require('../fields/NestedPartyID');
var NestedPartyIDSource = require('../fields/NestedPartyIDSource');
var NestedPartyRole = require('../fields/NestedPartyRole');

function NestedParties (nestedParties) {
  this.message = nestedParties;
}

/* group */

/* component */
NestedParties.prototype.nstdPtysSubGrp = function () {
  return this.message.groups[NstdPtysSubGrp.Tag]
    .map(function (nstdPtysSubGrp) {
      return new NstdPtysSubGrp(nstdPtysSubGrp);
  });
};

/* field */
NestedParties.prototype.nestedPartyId = function () {
  return new NestedPartyID(this.message.tags[NestedPartyID.Tag]);
};

/* field */
NestedParties.prototype.nestedPartyIdsource = function () {
  return new NestedPartyIDSource(this.message.tags[NestedPartyIDSource.Tag]);
};

/* field */
NestedParties.prototype.nestedPartyRole = function () {
  return new NestedPartyRole(this.message.tags[NestedPartyRole.Tag]);
};

/* end group */

NestedParties.Tag = '539';

module.exports = NestedParties;