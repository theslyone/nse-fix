var NoSettlOblig = require('../fields/NoSettlOblig');
var Instrument = require('../components/Instrument');
var Parties = require('../components/Parties');
var SettlDetails = require('../components/SettlDetails');
var NetGrossInd = require('../fields/NetGrossInd');
var SettlObligID = require('../fields/SettlObligID');
var SettlObligTransType = require('../fields/SettlObligTransType');
var SettlObligRefID = require('../fields/SettlObligRefID');
var CcyAmt = require('../fields/CcyAmt');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlDate = require('../fields/SettlDate');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireTime = require('../fields/ExpireTime');
var LastUpdateTime = require('../fields/LastUpdateTime');

function SettlObligationInstructions (settlObligationInstructions) {
  this.message = settlObligationInstructions;
}

/* group */

/* component */
SettlObligationInstructions.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
SettlObligationInstructions.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
SettlObligationInstructions.prototype.settlDetails = function () {
  return this.message.groups[SettlDetails.Tag]
    .map(function (settlDetails) {
      return new SettlDetails(settlDetails);
  });
};

/* field */
SettlObligationInstructions.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlObligId = function () {
  return new SettlObligID(this.message.tags[SettlObligID.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlObligTransType = function () {
  return new SettlObligTransType(this.message.tags[SettlObligTransType.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlObligRefId = function () {
  return new SettlObligRefID(this.message.tags[SettlObligRefID.Tag]);
};

/* field */
SettlObligationInstructions.prototype.ccyAmt = function () {
  return new CcyAmt(this.message.tags[CcyAmt.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
SettlObligationInstructions.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
SettlObligationInstructions.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
SettlObligationInstructions.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[EffectiveTime.Tag]);
};

/* field */
SettlObligationInstructions.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
SettlObligationInstructions.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[LastUpdateTime.Tag]);
};

/* end group */

SettlObligationInstructions.Tag = '1165';

module.exports = SettlObligationInstructions;