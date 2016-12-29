var NoUndlyInstrumentParties = require('../fields/NoUndlyInstrumentParties');
var UndlyInstrumentPtysSubGrp = require('../components/UndlyInstrumentPtysSubGrp');
var UndlyInstrumentPartyID = require('../fields/UndlyInstrumentPartyID');
var UndlyInstrumentPartyIDSource = require('../fields/UndlyInstrumentPartyIDSource');
var UndlyInstrumentPartyRole = require('../fields/UndlyInstrumentPartyRole');

function UndlyInstrumentParties (undlyInstrumentParties) {
  this.message = undlyInstrumentParties;
}

/* group */

/* component */
UndlyInstrumentParties.prototype.undlyInstrumentPtysSubGrp = function () {
  return this.message.groups[UndlyInstrumentPtysSubGrp.Tag]
    .map(function (undlyInstrumentPtysSubGrp) {
      return new UndlyInstrumentPtysSubGrp(undlyInstrumentPtysSubGrp);
  });
};

/* field */
UndlyInstrumentParties.prototype.undlyInstrumentPartyId = function () {
  return new UndlyInstrumentPartyID(this.message.tags[UndlyInstrumentPartyID.Tag]);
};

/* field */
UndlyInstrumentParties.prototype.undlyInstrumentPartyIdsource = function () {
  return new UndlyInstrumentPartyIDSource(this.message.tags[UndlyInstrumentPartyIDSource.Tag]);
};

/* field */
UndlyInstrumentParties.prototype.undlyInstrumentPartyRole = function () {
  return new UndlyInstrumentPartyRole(this.message.tags[UndlyInstrumentPartyRole.Tag]);
};

/* end group */

UndlyInstrumentParties.Tag = '1058';

module.exports = UndlyInstrumentParties;