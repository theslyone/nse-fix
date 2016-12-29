var NoSettlPartyIDs = require('../fields/NoSettlPartyIDs');
var SettlPtysSubGrp = require('../components/SettlPtysSubGrp');
var SettlPartyID = require('../fields/SettlPartyID');
var SettlPartyIDSource = require('../fields/SettlPartyIDSource');
var SettlPartyRole = require('../fields/SettlPartyRole');

function SettlParties (settlParties) {
  this.message = settlParties;
}

/* group */

/* component */
SettlParties.prototype.settlPtysSubGrp = function () {
  return this.message.groups[SettlPtysSubGrp.Tag]
    .map(function (settlPtysSubGrp) {
      return new SettlPtysSubGrp(settlPtysSubGrp);
  });
};

/* field */
SettlParties.prototype.settlPartyId = function () {
  return new SettlPartyID(this.message.tags[SettlPartyID.Tag]);
};

/* field */
SettlParties.prototype.settlPartyIdsource = function () {
  return new SettlPartyIDSource(this.message.tags[SettlPartyIDSource.Tag]);
};

/* field */
SettlParties.prototype.settlPartyRole = function () {
  return new SettlPartyRole(this.message.tags[SettlPartyRole.Tag]);
};

/* end group */

SettlParties.Tag = '781';

module.exports = SettlParties;