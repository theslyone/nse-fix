var NoSettlDetails = require('../fields/NoSettlDetails');
var SettlParties = require('../components/SettlParties');
var SettlObligSource = require('../fields/SettlObligSource');

function SettlDetails (settlDetails) {
  this.message = settlDetails;
}

/* group */

/* component */
SettlDetails.prototype.settlParties = function () {
  return this.message.groups[SettlParties.Tag]
    .map(function (settlParties) {
      return new SettlParties(settlParties);
  });
};

/* field */
SettlDetails.prototype.settlObligSource = function () {
  return new SettlObligSource(this.message.tags[SettlObligSource.Tag]);
};

/* end group */

SettlDetails.Tag = '1158';

module.exports = SettlDetails;