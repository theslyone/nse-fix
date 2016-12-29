var NoInstrumentParties = require('../fields/NoInstrumentParties');
var InstrumentPtysSubGrp = require('../components/InstrumentPtysSubGrp');
var InstrumentPartyID = require('../fields/InstrumentPartyID');
var InstrumentPartyIDSource = require('../fields/InstrumentPartyIDSource');
var InstrumentPartyRole = require('../fields/InstrumentPartyRole');

function InstrumentParties (instrumentParties) {
  this.message = instrumentParties;
}

/* group */

/* component */
InstrumentParties.prototype.instrumentPtysSubGrp = function () {
  return this.message.groups[InstrumentPtysSubGrp.Tag]
    .map(function (instrumentPtysSubGrp) {
      return new InstrumentPtysSubGrp(instrumentPtysSubGrp);
  });
};

/* field */
InstrumentParties.prototype.instrumentPartyId = function () {
  return new InstrumentPartyID(this.message.tags[InstrumentPartyID.Tag]);
};

/* field */
InstrumentParties.prototype.instrumentPartyIdsource = function () {
  return new InstrumentPartyIDSource(this.message.tags[InstrumentPartyIDSource.Tag]);
};

/* field */
InstrumentParties.prototype.instrumentPartyRole = function () {
  return new InstrumentPartyRole(this.message.tags[InstrumentPartyRole.Tag]);
};

/* end group */

InstrumentParties.Tag = '1018';

module.exports = InstrumentParties;