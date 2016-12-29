var NoDerivativeInstrumentPartySubIDs = require('../fields/NoDerivativeInstrumentPartySubIDs');
var DerivativeInstrumentPartySubID = require('../fields/DerivativeInstrumentPartySubID');
var DerivativeInstrumentPartySubIDType = require('../fields/DerivativeInstrumentPartySubIDType');

function DerivativeInstrumentPartySubIDsGrp (derivativeInstrumentPartySubIdsGrp) {
  this.message = derivativeInstrumentPartySubIdsGrp;
}

/* group */

/* field */
DerivativeInstrumentPartySubIDsGrp.prototype.derivativeInstrumentPartySubId = function () {
  return new DerivativeInstrumentPartySubID(this.message.tags[DerivativeInstrumentPartySubID.Tag]);
};

/* field */
DerivativeInstrumentPartySubIDsGrp.prototype.derivativeInstrumentPartySubIdtype = function () {
  return new DerivativeInstrumentPartySubIDType(this.message.tags[DerivativeInstrumentPartySubIDType.Tag]);
};

/* end group */

DerivativeInstrumentPartySubIDsGrp.Tag = '1296';

module.exports = DerivativeInstrumentPartySubIDsGrp;