var NoTrdRepIndicators = require('../fields/NoTrdRepIndicators');
var TrdRepPartyRole = require('../fields/TrdRepPartyRole');
var TrdRepIndicator = require('../fields/TrdRepIndicator');

function TrdRepIndicatorsGrp (trdRepIndicatorsGrp) {
  this.message = trdRepIndicatorsGrp;
}

/* group */

/* field */
TrdRepIndicatorsGrp.prototype.trdRepPartyRole = function () {
  return new TrdRepPartyRole(this.message.tags[TrdRepPartyRole.Tag]);
};

/* field */
TrdRepIndicatorsGrp.prototype.trdRepIndicator = function () {
  return new TrdRepIndicator(this.message.tags[TrdRepIndicator.Tag]);
};

/* end group */

TrdRepIndicatorsGrp.Tag = '1387';

module.exports = TrdRepIndicatorsGrp;