var NoInstrumentPartySubIDs = require('../fields/NoInstrumentPartySubIDs');
var InstrumentPartySubID = require('../fields/InstrumentPartySubID');
var InstrumentPartySubIDType = require('../fields/InstrumentPartySubIDType');

function InstrumentPtysSubGrp (instrumentPtysSubGrp) {
  this.message = instrumentPtysSubGrp;
}

/* group */

/* field */
InstrumentPtysSubGrp.prototype.instrumentPartySubId = function () {
  return new InstrumentPartySubID(this.message.tags[InstrumentPartySubID.Tag]);
};

/* field */
InstrumentPtysSubGrp.prototype.instrumentPartySubIdtype = function () {
  return new InstrumentPartySubIDType(this.message.tags[InstrumentPartySubIDType.Tag]);
};

/* end group */

InstrumentPtysSubGrp.Tag = '1052';

module.exports = InstrumentPtysSubGrp;